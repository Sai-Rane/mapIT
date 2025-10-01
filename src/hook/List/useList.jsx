import { useEffect, useMemo, useRef, useState } from "react";

const useList = () => {
  // state
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [titleQuery, setTitleQuery] = useState("");

  const toast = useRef(null);

  const showAlert = () => {
    toast.current.show({
      severity: "error",
      summary: "Error while fetching data",
      detail: "Please try again later!",
      life: 5000,
    });
  };

  const filteredData = useMemo(() => {
    const q = titleQuery.trim().toLowerCase();
    if (!q) return listData;
    return listData.filter((item) =>
      (item?.title || "").toLowerCase().includes(q)
    );
  }, [listData, titleQuery]);

  // get list data
  const getListData = async () => {
    try {
      setLoading(true);
      const url = await fetch("https://jsonplaceholder.typicode.com/posts");
      const response = await url.json();
      setListData(response);
    } catch (error) {
      showAlert();
    } finally {
      setLoading(false);
    }
  };

  const bodyTemplate = (rowData) => {
    const text = rowData?.body ?? "";
    const max = 100;
    return text.length > max ? `${text.slice(0, max)}…` : text;
  };

  // get list data on mount
  useEffect(() => {
    getListData();
  }, []);

  return {
    loading,
    toast,
    bodyTemplate,
    titleQuery,
    setTitleQuery,
    filteredData,
  };
};

export default useList;
