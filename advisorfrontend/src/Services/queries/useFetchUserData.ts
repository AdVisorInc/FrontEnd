import { useEffect, useState } from "react";

export interface UserProfileProps {
  userData: UserData; // Use the UserData interface as the type for userData prop
}

export interface ScoreContribution {
  delta: number;
  total: number;
}

export interface CtrStatDetail {
  deltaPercent?: number;
  deltaTimeFrame?: number;
  deltaUnits?: number;
  total: number;
}
export interface SpendStatDetail {
  total: number;
  updated?: number;
}

export interface Stats {
  ctr: CtrStatDetail;
  spend: SpendStatDetail;
}

export interface Platform {
  color: string;
  id: number;
  image: string;
  name: string;
  nickname: string;
  scoreContribution: ScoreContribution;
  stats: Stats;
  type: string;
}

export interface User {
  name: string;
  title: string;
}

export interface UserData {
  platforms: Platform[];
  totalScore: number;
  totalScoreDelta: number;
  user: User;
}

export interface ApiResponse {
  data: UserData;
  error: null | string;
  success: boolean;
}

const useFetchUserData = () => {
  // State for storing the fetched data
  const [data, setData] = useState<UserData | null>(null);

  // State for loading status
  const [loading, setLoading] = useState<boolean>(true);

  // State for error handling
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5005/user/overview/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonResponse: ApiResponse = await response.json();
        if (jsonResponse.success && jsonResponse.data) {
          setData(jsonResponse.data);
        } else {
          throw new Error("Data fetch was not successful");
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // The empty array ensures this effect runs only once after the initial render

  return { data, loading, error };
};

export default useFetchUserData;
