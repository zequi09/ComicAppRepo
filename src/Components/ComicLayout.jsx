import React, { useEffect, useState } from "react";
//Style
import { Col, Container, Row } from "react-bootstrap";
//Export my service
import { getComicFromURL } from "../Services/ComicService";
//Components
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import DialogPopUp from "./DialogPopUp";
import LoadingSpinner from "./LoadingSpinner";

const ComicLayout = () => {
  //States
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [rateValue, setRateValue] = useState(0);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [showNextComic, setShowNextComic] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleComicInfo = async () => {
    setIsLoading(true);
    setShowNextComic(false);
    setRateValue(0);
    try {
      //Generate randon number for random comic
      const generateRandomNumber = Math.random() * 1000;
      const number = Math.ceil(generateRandomNumber);
      const obj = {
        randomNumber: number,
      };
      const service = await getComicFromURL(obj);
      if (service.status) {
        if (service.status === 200) {
          const { img, title, alt } = service.data;
          setTitle(title);
          setImage(img);
          setDescription(alt);
        }
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      handleComicInfo();
    } catch (error) {
      console.log(error);
    }
  }, [showNextComic]);

  return (
    <div className="main-container">
      {!isLoading ? (
        <Container fluid>
          <Row>
            <Col>
              <h1 className="title">{title}</h1>
              <br />
              <img src={image} alt={description} />
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <Typography component="legend" style={{ fontSize: "2rem" }}>
                Califica este comic
              </Typography>
              <Rating
                name="simple-controlled"
                value={rateValue}
                size="large"
                onChange={(event, newValue) => {
                  setRateValue(newValue);
                  setIsOpenDialog(true);
                }}
              />
            </Col>
          </Row>
          <DialogPopUp
            isOpenDialog={isOpenDialog}
            setIsOpenDialog={setIsOpenDialog}
            setShowNextComic={setShowNextComic}
          />
        </Container>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default ComicLayout;
