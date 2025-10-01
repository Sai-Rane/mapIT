import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Toast } from "primereact/toast";
import React from "react";
import useList from "../../hook/List/useList";
import "./List.css";

const List = () => {
  const {
    loading,
    toast,
    bodyTemplate,
    titleQuery,
    setTitleQuery,
    filteredData,
  } = useList();

  return (
    <>
      <div>List</div>
      <Toast ref={toast} />
      <div className="search">
        <input
          type="text"
          value={titleQuery}
          onChange={(e) => setTitleQuery(e.target.value)}
          placeholder="Search by title..."
          style={{ width: "100%", maxWidth: 400, padding: 8 }}
        />
      </div>
      <div className="table">
        <DataTable
          value={filteredData}
          paginator
          rows={25}
          loading={loading}
          scrollable
          scrollHeight="flex"
        >
          <Column field="id" header="Sr No." style={{ width: "5%" }}></Column>
          <Column field="title" header="Title"></Column>
          <Column field="body" header="Body" body={bodyTemplate}></Column>
        </DataTable>
      </div>
    </>
  );
};

export default List;
