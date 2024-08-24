import { drive_v3 } from "googleapis";
import { useEffect, useState } from "react";

export function useFetchData(url: string) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let res: Response;
        res = await fetch(url);
        const data: drive_v3.Schema$File[] = await res.json();
        setData(data);
        setLoading(false);
      } catch (err: any) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, loading, error };
}
