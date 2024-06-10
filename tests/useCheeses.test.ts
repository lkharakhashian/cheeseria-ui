import useCheeses from '../src/hooks/useCheeses';
import axios from 'axios';
import { Cheese } from '../src/types';
import { renderHook, waitFor } from '@testing-library/react';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('useCheeses', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch cheeses successfully', async () => {
    const cheeses: Cheese[] = [
      { id: 1, name: 'Cheddar', color: 'Yellow', price: 10, image: 'cheddar.jpg' },
      { id: 2, name: 'Gouda', color: 'Yellow', price: 12, image: 'gouda.jpg' },
    ];

    mockedAxios.get.mockResolvedValue({ data: cheeses });

    const { result } = renderHook(() => useCheeses());

    expect(result.current.loading).toBe(true);

    await waitFor(() => expect(result.current).toMatchObject({"cheeses": [{"color": "Yellow", "id": 1, "image": "cheddar.jpg", "name": "Cheddar", "price": 10}, {"color": "Yellow", "id": 2, "image": "gouda.jpg", "name": "Gouda", "price": 12}], "error": null, "loading": false}));

    expect(result.current.cheeses).toEqual(cheeses);
    expect(result.current.error).toBeNull();
  });

  it('should set error if fetching cheeses fails', async () => {
    mockedAxios.get.mockRejectedValue(new Error('Network Error'));

    const { result } = renderHook(() => useCheeses());

    await waitFor(() => expect(result.current).toMatchObject({}));

    expect(result.current.cheeses).toEqual([]);
    expect(result.current.error).toBe('Failed to fetch cheeses');
  });
});