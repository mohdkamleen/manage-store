import React, { useEffect, useState } from "react";
import { Table, Input, Space } from "antd";
import data from "./data";

export default function Orders() {
  const [orders] = useState(data)

  const columns = [
    { title: "S.NO", dataIndex: "S.NO", key: "S.NO" },
    { title: "SUPPLIER", dataIndex: "SUPPLIER", key: "SUPPLIER" },
    { title: "MATERIAL_DESCRIPTION", dataIndex: "MATERIAL_DESCRIPTION", key: "MATERIAL_DESCRIPTION" },
    { title: "MATERIAL_DETAILS", dataIndex: "MATERIAL_DETAILS", key: "MATERIAL_DETAILS" },
    { title: "MAKE", dataIndex: "MAKE", key: "MAKE" },
    { title: "QTY", dataIndex: "QTY", key: "QTY" },
    { title: "ACESS_VALUE", dataIndex: "ACESS_VALUE", key: "ACESS_VALUE" },
    { title: "RATE", dataIndex: "RATE", key: "RATE", render: (text) => `₹${text}` },
  ];

  const [search, setSearch] = useState("");

  const filteredOrders = orders.filter(
    (order) =>
      order.SUPPLIER?.toString().toLowerCase().includes(search?.toLowerCase()) ||
      order.MATERIAL_DESCRIPTION?.toString().toLowerCase().includes(search?.toLowerCase()) ||
      order.MATERIAL_DETAILS?.toString().toLowerCase().includes(search?.toLowerCase()) ||
      order.ACESS_VALUE?.toString().toLowerCase().includes(search?.toString().toLowerCase()) ||
      order.MAKE?.toString().toLowerCase().includes(search?.toString().toLowerCase()) ||
      order.RATE?.toString().toLowerCase().includes(search?.toString().toLowerCase()) ||
      order.QTY?.toString().toLowerCase().includes(search?.toString().toLowerCase())
  );


  return (
    <div style={{ padding: 24, maxWidth: 1500, margin: "0 auto" }}>
      <h1 style={{ fontSize: 22, fontWeight: "bold", marginBottom: 16 }}>Manage Orders</h1>

      <div style={{ display: "flex", justifyContent:"space-between",alignItems:"center",marginBottom:"17px" }}>
        <Input
          placeholder="Filter by material, supplier, make, rate etc"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: 300 }}
        />
        <code>{filteredOrders.length} / {data.length} Orders</code> 
      </div>

      <Table
        scroll={{ x: 'max-content' }}
        dataSource={filteredOrders}
        columns={columns}
        rowKey="id"
        pagination={{pageSize:20}}
        bordered />
    </div>
  );
}
