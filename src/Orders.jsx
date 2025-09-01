import React, { useState } from "react";
import { Table, Input, Space } from "antd";

export default function Orders() {
  const [orders] = useState([
    { id: 1, item: "Bolt", supplier: "ABC Ltd", price: 20 },
    { id: 2, item: "Nut", supplier: "XYZ Traders", price: 10 },
    { id: 3, item: "Screw", supplier: "Fasteners Co", price: 15 },
    { id: 4, item: "Washer", supplier: "ABC Ltd", price: 5 },
  ]);

  const [search, setSearch] = useState("");

  const filteredOrders = orders.filter(
    (order) =>
      order.item.toLowerCase().includes(search.toLowerCase()) ||
      order.supplier.toLowerCase().includes(search.toLowerCase()) ||
      order.price.toString().toLowerCase().includes(search.toString().toLowerCase())
  );

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Item", dataIndex: "item", key: "item" },
    { title: "Supplier", dataIndex: "supplier", key: "supplier" },
    { title: "Price", dataIndex: "price", key: "price", render: (text) => `₹${text}` },
  ];

  return (
    <div style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 22, fontWeight: "bold", marginBottom: 16 }}>Manage Orders</h1>

      <Space style={{ marginBottom: 16 }}>
        <Input
          placeholder="Filter by item, supplier or price"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: 300 }}
        />
      </Space>

      <Table dataSource={filteredOrders} columns={columns} rowKey="id" bordered />
    </div>
  );
}
