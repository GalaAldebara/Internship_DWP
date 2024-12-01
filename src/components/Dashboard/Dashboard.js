import React from 'react';
import { Typography, Box, Button, AppBar, Toolbar, Container } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const DashboardContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  minHeight: '100vh',
  backgroundImage: 'url(/images/dwp.jpg)', 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  overflow: 'hidden',
});

const BackgroundOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  zIndex: 1,
});

const FloatingHeader = styled(AppBar)({
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  color: '#000',
  boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
  borderRadius: '12px',
  margin: '30px auto',
  position: 'relative',
  maxWidth: '90%',
  zIndex: 1002,
  padding: '15px',
  minHeight: '100px',
});

const LogoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  flexGrow: 1,
});

const Logo = styled('img')({
  height: '40px',
});

const CustomButton = styled(Button)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: 'bold',
  textTransform: 'none',
  boxShadow: 'none',
  padding: '0 10px',
}));

const ContentSection = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,
  color: '#fff',
  textAlign: 'center',
  marginTop: '50px',
  padding: '20px',
});

const AboutSection = styled(Container)({
  backgroundColor: 'rgba(255, 255, 255, 0.8)', 
  borderRadius: '12px', 
  padding: '30px',
  marginTop: '30px',
  textAlign: 'center',
  boxShadow: 'none', 
});

const StatsSection = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#386C94',
  color: '#fff',
  padding: '20px 40px', 
  margin: '50px auto', 
  borderRadius: '12px',
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)', 
  maxWidth: '60%', 
});


const StatCard = styled(Box)({
  flex: 1,
  textAlign: 'center',
  padding: '10px',
  borderRight: '1px solid rgba(255, 255, 255, 0.4)', 
  '&:last-child': {
    borderRight: 'none', 
  },
});

const StatNumber = styled(Typography)({
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '5px',
});

const StatLabel = styled(Typography)({
  fontSize: '14px',
});

const InternetPackageSection = styled(Box)({
  marginTop: '40px',
  padding: '20px 40px', 
  backgroundColor: 'rgba(255, 255, 255, 0.8)', 
  borderRadius: '12px', 
  boxShadow: 'none', 
  maxWidth: '60%', 
  margin: '0 auto', 
});

const SectionHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
});

const PackageGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
});

const PackageCard = styled(Button)({
  display: 'block',
  textAlign: 'left', 
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  padding: '15px',
  textDecoration: 'none', 
  color: '#000', 
  transition: 'transform 0.2s ease, box-shadow 0.2s ease', 
  '&:hover': {
    transform: 'scale(1.02)', 
    boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.15)',
  },
});

const PackageDate = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
});

const DateBox = styled(Box)({
  backgroundColor: '#000',
  color: '#fff',
  padding: '5px 10px',
  borderRadius: '4px',
  fontSize: '14px',
  fontWeight: 'bold',
  marginRight: '10px',
});

const MonthYear = styled(Box)({
  backgroundColor: '#386C94',
  color: '#fff',
  padding: '5px 10px',
  borderRadius: '4px',
  fontSize: '14px',
  fontWeight: 'bold',
});

const PackageTitle = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '16px',
  marginBottom: '5px',
});

const PackageDetails = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '14px',
  color: '#555',
});

const PackagePrice = styled(Box)({
  fontWeight: 'bold',
  color: '#333',
});

const PromoSection = styled(Box)({
  marginTop: '40px',
  marginBottom: '60px',
  padding: '20px 40px',
  textAlign: 'center',
  backgroundColor: '#f8f9fa',
  borderRadius: '12px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  maxWidth: '60%',
  margin: '0 auto',
});

const PromoHeader = styled(Typography)({
  color: '#386C94',
  fontWeight: 'bold',
  fontSize: '16px', 
  marginBottom: '5px', 
});

const PromoTitle = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '24px',
  marginBottom: '20px',
});

const PromoGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '20px',
});

const PromoCard = styled(Box)({
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  textAlign: 'center',
});

const PromoImage = styled('img')({
  width: '100%',
  height: 'auto',
});

const PromoDetails = styled(Box)({
  padding: '15px',
});

const PromoDate = styled(Typography)({
  fontSize: '14px',
  color: '#555',
  marginTop: '5px',
});

const FooterSection = styled(Box)({
  backgroundColor: '#386C94', 
  color: '#fff', 
  padding: '20px 40px', 
  display: 'flex', 
  justifyContent: 'space-between', 
  alignItems: 'center', 
  position: 'relative',
});

const FooterText = styled(Typography)({
  fontSize: '14px', 
});

const BackToTopButton = styled(Button)({
  backgroundColor: '#1B2430',
  color: '#fff',
  textTransform: 'none', 
  fontSize: '12px',
  fontWeight: 'bold',
  '&:hover': { backgroundColor: '#16202A' }, 
});



const Dashboard = ({ user }) => {
  const navigate = useNavigate(); 

  const handlePackageClick = (id) => {
    navigate(`/transaction?packageId=${id}`);
  };

    const handleLogout = () => {
    // Hapus data sesi (contoh: token atau user data)
    localStorage.removeItem('userToken'); // Contoh: Hapus token pengguna
    localStorage.removeItem('userData'); // Contoh: Hapus data pengguna

    // Arahkan ke halaman login
    navigate('/login');
  };
  return (
    <>
      <DashboardContainer>
        <BackgroundOverlay />
        <FloatingHeader position="static">
          <Toolbar>
            <LogoContainer>
              <Logo src="/images/logo.svg" alt="Company Logo" />
            </LogoContainer>
            <CustomButton
              sx={{
                color: '#386C94',
                marginRight: '20px',
              }}
            >
              Beranda
            </CustomButton>
            <CustomButton
              sx={{
                color: '#000',
              }}
            >
              Logout
            </CustomButton>
          </Toolbar>
        </FloatingHeader>

        <ContentSection maxWidth="sm">
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              whiteSpace: 'pre-line',
            }}
          >
            Welcome!{'\n'}DWP E-Commerce
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '18px', lineHeight: '1.6' }}>
            Website e-commerce yang menjual paket data dan berbagai layanan lainnya.
          </Typography>
        </ContentSection>
      </DashboardContainer>

      {/* About Section */}
      <AboutSection maxWidth="md" sx={{ marginBottom: '40px' }}>
        <Logo src="/images/logo.svg" alt="Company Logo" style={{ height: '60px', marginBottom: '20px' }} />
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#386C94', marginBottom: '10px' }}>
          DWP E-Commerce
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            marginBottom: '10px',
          }}
        >
          About DWP E-Commerce
        </Typography>
        <Box sx={{ width: '60px', height: '4px', backgroundColor: '#386C94', margin: '0 auto 20px' }} />
        <Typography variant="body1" sx={{ fontSize: '16px', lineHeight: '1.8', textAlign: 'justify', color: '#333' }}>
          DWP E-Commerce adalah perusahaan inovatif yang bergerak di bidang e-commerce, dengan spesialisasi dalam
          penyediaan dan penjualan paket data internet. Berdiri dengan tujuan untuk mendukung era digitalisasi yang
          semakin berkembang, DWP hadir sebagai solusi utama bagi masyarakat dalam memenuhi kebutuhan internet mereka
          secara praktis dan efisien.
        </Typography>
      </AboutSection>

      {/* Stats Section */}
      <StatsSection>
        <StatCard>
          <StatNumber>312</StatNumber>
          <StatLabel>Jumlah Pelanggan Aktif</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>98%</StatNumber>
          <StatLabel>Tingkat Kepuasan Pelanggan</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>4.9</StatNumber>
          <StatLabel>Rating & Ulasan</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>10 Jt</StatNumber>
          <StatLabel>Rekam Jejak Transaksi</StatLabel>
        </StatCard>
      </StatsSection>

      {/* Internet Package Section */}
      <InternetPackageSection>
        <SectionHeader>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            Paket Internet Yang Tersedia
          </Typography>
          <Button variant="contained" sx={{ backgroundColor: '#386C94', color: '#fff' }}>
            Selengkapnya &raquo;
          </Button>
        </SectionHeader>
        <PackageGrid>
          {[...Array(9)].map((_, index) => (
            <PackageCard
              key={index}
              onClick={() => handlePackageClick(index + 1)} 
            >
              <PackageDate>
                <DateBox>10</DateBox>
                <MonthYear>Maret 2024</MonthYear>
              </PackageDate>
              <PackageTitle>Paket Internet {index + 1}</PackageTitle>
              <PackageDetails>
                <span>30 Hari</span>
                <PackagePrice>Rp {50_000 + index * 10_000}</PackagePrice>
              </PackageDetails>
            </PackageCard>
          ))}
        </PackageGrid>
      </InternetPackageSection>

      {/* Promo Package Section */}
      <PromoSection>
  <PromoHeader variant="body1">Beli Sekarang!</PromoHeader>
  <PromoTitle variant="h5">Promo & Penawaran Khusus</PromoTitle>
  <PromoGrid>
    {[...Array(3)].map((_, index) => (
      <PromoCard key={index}>
        <PromoImage src="/images/promo.png" alt={`Promo ${index + 1}`} />
        <PromoDetails>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
            {index === 0
              ? 'Diskon Akhir Tahun'
              : index === 1
              ? 'Cashback 15%'
              : 'Bonus Kuota Malam'}
          </Typography>
          <PromoDate>
            {index === 0
              ? '14 Agustus - 25 Juli 2024'
              : index === 1
              ? '10 Maret - 24 Mei 2024'
              : '10 November - 31 Desember 2024'}
          </PromoDate>
        </PromoDetails>
      </PromoCard>
    ))}
  </PromoGrid>
</PromoSection>

    <FooterSection>
      <Typography variant="body2">PT Dutakom Wibawa Putra</Typography>
      <Button
        sx={{
          backgroundColor: '#1B2430',
          color: '#fff',
          textTransform: 'none',
          fontSize: '12px',
          fontWeight: 'bold',
          '&:hover': { backgroundColor: '#16202A' },
        }}
        href="#top"
      >
        Kembali ke atas
      </Button>
    </FooterSection>

    </>
  );
};

export default Dashboard;


