import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container, IconButton } from "@mui/material";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    image: "https://www.shutterstock.com/image-photo/air-conditioner-service-indoors-cleaning-600nw-2291045833.jpg",
    title: "Professional AC Repair Services",
    description: "Keep your home cool and comfortable with our expert AC repair solutions.",
    cta: "Schedule Service",
  },
  {
    image: "https://www.shutterstock.com/image-photo/air-conditioner-service-indoors-cleaning-600nw-2291045833.jpg",
    title: "Emergency AC Repairs",
    description: "24/7 emergency services to keep you cool when you need it most.",
    cta: "Call Now",
  },
  {
    image: "https://images.unsplash.com/photo-1605977224328-5438dfe8b729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "AC Maintenance Plans",
    description: "Prevent breakdowns and extend the life of your AC unit with our maintenance plans.",
    cta: "Learn More",
  },
];

const ACRepairHomepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <Container maxWidth="lg">
      <Box
        position="relative"
        overflow="hidden"
        borderRadius={2}
        boxShadow={5}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              display: index === currentSlide ? "flex" : "none",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: { xs: "400px", md: "500px" },
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "#fff",
              textAlign: "center",
              padding: 4,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <Typography variant="h2" component="h1" gutterBottom>
              {slide.title}
            </Typography>
            <Typography variant="h5" paragraph>
              {slide.description}
            </Typography>
            <Button variant="contained" color="primary" size="large" sx={{ marginTop: 2, fontWeight: "bold", borderRadius: "25px", padding: "8px 24px", "&:hover": { transform: "scale(1.05)", transition: "all 0.3s ease-in-out" } }}>
              {slide.cta}
            </Button>
          </Box>
        ))}
        <Box
          position="absolute"
          top="50%"
          left={0}
          right={0}
          display="flex"
          justifyContent="space-between"
          sx={{ transform: "translateY(-50%)", opacity: 1, transition: "opacity 0.3s ease-in-out", zIndex: 1 }}
        >
          <IconButton onClick={handlePrevSlide} aria-label="Previous slide" sx={{ color: "#fff", backgroundColor: "rgba(0, 0, 0, 0.5)", "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" } }}>
            <FaChevronLeft />
          </IconButton>
          <IconButton onClick={handleNextSlide} aria-label="Next slide" sx={{ color: "#fff", backgroundColor: "rgba(0, 0, 0, 0.5)", "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" } }}>
            <FaChevronRight />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default ACRepairHomepage;
