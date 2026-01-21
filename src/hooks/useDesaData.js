import { useState, useEffect } from 'react';
import { supabase, transformDesaData } from '../lib/supabase';

export const useDesaData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Query dari view yang sudah dibuat di Supabase
        const { data: desaData, error: supabaseError } = await supabase
          .from('view_desa_lengkap')
          .select('*')
          .single();

        if (supabaseError) {
          throw supabaseError;
        }

        // Transform data ke format yang dipakai aplikasi
        const transformedData = transformDesaData(desaData);
        setData(transformedData);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching desa data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
