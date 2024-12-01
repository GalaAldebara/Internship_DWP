import React from "react";
import { useSearchParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const FloatingHeader = styled(AppBar)({
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  color: "#000",
  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)",
  borderRadius: "12px",
  margin: "30px auto",
  position: "relative",
  maxWidth: "90%",
  zIndex: 1002,
  padding: "15px",
});

const packageDataDefault = {
  id: "defaultPackageId",
  name: "Internet 30 Gb",
  price: 121000,
  validity: "30 Hari",
};

const Logo = styled("img")({
  height: "40px", 
  objectFit: "contain",
});


const PaymentMethods = () => {
  const paymentMethods = [
    { label: "Pulsa Anda: Rp 0", action: "Isi Pulsa" },
    { label: "Transfer ke Virtual Account", icon: true },
    { label: "Pembayaran di Gerai Retail", icon: true },
    { label: "Uang Elektronik", icon: true },
    { label: "Cicilan Tanpa Kartu Kredit", icon: true },
  ];

  return (
    <div>
      <h4>Pilih Metode Pembayaran</h4>
      <div style={{ marginTop: "10px" }}>
        {paymentMethods.map((method, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              marginBottom: "10px",
              backgroundColor: "#D9D9D9",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              {method.icon && (
                <span
                  style={{
                    display: "inline-block",
                    width: "24px",
                    height: "24px",
                    marginRight: "10px",
                    backgroundColor: "#ccc",
                    borderRadius: "50%",
                  }}
                />
              )}
              <span>{method.label}</span>
            </div>
            {method.action ? (
              <a
                href="#"
                style={{
                  fontSize: "12px",
                  color: "#007bff",
                  textDecoration: "none",
                }}
              >
                {method.action}
              </a>
            ) : (
              <span>▼</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Summary = ({ packageData }) => (
  <div>
    <h4>Ringkasan Belanja</h4>
    <div
      style={{
        border: "1px solid #e0dcdc", 
        borderRadius: "8px",
        padding: "15px",
        backgroundColor: "#D9D9D9",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <span style={{ fontWeight: "bold" }}>
          <span role="img" aria-label="internet" style={{ marginRight: "8px" }}>
            🌐
          </span>
          {packageData.name}
        </span>
        <span style={{ fontWeight: "bold" }}>Rp {packageData.price.toLocaleString()}</span>
      </div>
      <p style={{ margin: "0", color: "#666" }}>Berlaku {packageData.validity}</p>
      <hr style={{ margin: "10px 0" }} />
      <a
        href="#"
        style={{
          fontSize: "12px",
          color: "#386C94",
          textDecoration: "none",
        }}
      >
        Ganti Paket Lain
      </a>
    </div>
    <div
      style={{
        border: "1px solid #e0dcdc", 
        borderRadius: "8px",
        padding: "15px",
        backgroundColor: "#D9D9D9",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <span>Total paket Data:</span>
        <span>Rp {packageData.price.toLocaleString()}</span>
      </div>
      <hr style={{ margin: "10px 0" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontWeight: "bold",
        }}
      >
        <span>Harga Total</span>
        <span style={{ color: "#386C94" }}>Rp {packageData.price.toLocaleString()}</span>
      </div>
    </div>
    <div style={{ textAlign: "center" }}>
      <button
        style={{
          backgroundColor: "#386C94",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          width: "100%",
        }}
      >
        Lanjut
      </button>
    </div>
  </div>
);

const Footer = () => (
  <div
    style={{
      backgroundColor: "#0b1e45", 
      color: "#fff", 
      padding: "20px",
      textAlign: "center",
      marginTop: "40px", 
    }}
  >
    <h4 style={{ margin: "0", fontWeight: "bold" }}>Tentang</h4>
    <p style={{ margin: "5px 0", fontSize: "14px", color: "#a8b2c1" }}>
      DWP E-Commerce, Portal Pembelian Paket Data & Layanan Servis Lainnya
    </p>
  </div>
);


const Transaction = () => {
  const [searchParams] = useSearchParams();
  const packageId = searchParams.get("packageId");

  const packageData = {
    ...packageDataDefault,
    id: packageId || packageDataDefault.id,
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <FloatingHeader position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Logo src="/images/logo.svg" alt="Company Logo" />
          </Box>
          <Button sx={{ color: "#386C94", marginRight: "20px" }}>Beranda</Button>
          <Button sx={{ color: "#000" }}>Logout</Button>
        </Toolbar>
      </FloatingHeader>
      <div
        style={{
          maxWidth: "900px",
          margin: "100px auto 20px",
          display: "flex",
          gap: "40px", 
        }}
      >
        <div style={{ flex: 2 }}>
          <PaymentMethods />
        </div>
        <div style={{ flex: 1 }}>
          <Summary packageData={packageData} />
        </div>
      </div>
      
    </div>
  
  );
};

export default Transaction;
