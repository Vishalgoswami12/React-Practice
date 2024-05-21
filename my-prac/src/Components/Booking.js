import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Booking() {
  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    movie_name: "",
    no_seats: "",
    user_name: ""
  });
  const [booking, setBooking] = useState(JSON.parse(localStorage.getItem("bookings")) || []);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all").then(res=> res.json())
    .then((d) => {
        setData(d?.find(i => i?.show?.id === Number(id))?.show);
    })
},[id])

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formData, movie_name: data?.name };
    const newBooking = [...booking, payload];
    setBooking(newBooking);
    localStorage.setItem("bookings", JSON.stringify(newBooking));
    setOpen(false);
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <img src={data?.image?.medium} alt={data?.name} />
      <h2 style={{ color: "white" }}>{data?.name}</h2>
      <h3 style={{ color: "white" }}>{data?.language}</h3>
      <h3 style={{ color: "white" }}>{data?.runtime}</h3>
      <h3 style={{ color: "white" }}>{data?.rating?.average}</h3>
      <h3 style={{ color: "white" }}>{data?.genres?.join(", ")}</h3>
      <button onClick={() => setOpen(true)}>Make a booking</button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Book Ticket
          </Typography>
          <form onSubmit={handleSubmit}>
            <input type="text" value={data?.name || ''} disabled />
            <input type="text" placeholder="User Name" value={formData.user_name} onChange={(e) => setFormData({ ...formData, user_name: e.target.value })} />
            <input type="number" placeholder="No of seats" value={formData.no_seats} onChange={(e) => setFormData({ ...formData, no_seats: e.target.value })} />
            <button type="submit">Book</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default Booking;
