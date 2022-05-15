import {
    Typography,
    Container,
    Button,
    Stack,
    styled,
    Grid,
  } from "@mui/material";
  import Box from "@mui/material/Box";
  import Image from "next/image";
  import images from '../public/images/Images'
  import SettingsIcon from "@mui/icons-material/Settings";
  import { useState } from "react";
  import Footer from "../components/Footer";
  import Navbar from "../components/Navbar"
  
  const StyledButton = styled(Button)(
    ({ theme }) => `
    font-size:1rem;
    font-weight:semi-bold;
    border-radius:20px;
    height:2.5rem;
    background-color:"red";
    font-family:'Nexa Bold',Helvetica,Arial,Lucida,sans-serif;
    margin-top:10px !important;
    &:hover {
        background-color:#31303E ;
    }
    `
  );
  
  const StyledButton2 = styled(Button)(
    ({ theme }) => `
    box-shadow: 0 7px 22px 2px #C2338E;
    &:hover {
        background-color:#C2338E; ;
    }
    `
  );
  
  const StyledButton3 = styled(Button)(
      ({ theme }) => `
      box-shadow: 0 7px 22px 2px #5133D5;
      &:hover {
          background-color:#5133D5; ;
      }
      `
    );
  
  export default function Staking() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <>
      <Navbar />
        <div
          style={{ backgroundImage: `url(images/bgmatt.jpg)` }}
          className="bg-black"
        >
          <Box ml={8} py={3}>
            
            {/* ------------------------------------------------ */}
  
            <div className="flex items-center justify-center p-5">
              <Typography variant="h3">STAKING</Typography>
            </div>
  
            <Container>
              <Container>
                <div className="flex justify-start items-start py-5">
                  <Typography
                    fontSize="1.3rem"
                    variant="subtitle1"
                    fontWeight="bold"
                  >
                    Stats
                  </Typography>
                </div>
              </Container>
  
              <Box>
                <Grid container spacing={5}>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className="bg-[#16182D] border-4 border-pink-500 py-12 rounded-3xl">
                      <Container>
                        <Box>
                          <Typography variant="h4">
                            67,874 KCK = $32.65M
                          </Typography>
  
                          <Typography
                            variant="subtitle1"
                            sx={{ color: "#C9C9C9" }}
                          >
                            Total Stacked CTK
                          </Typography>
                        </Box>
  
                        <Box>
                          <Box
                            my={3}
                            display="flex"
                            justifyContent="space-between"
                          >
                            <Box p={3}>
                              <Typography
                                variant="subtitle1"
                                fontSize="2rem"
                                fontWeight="bold"
                              >
                                6.28%
                              </Typography>
                              <Typography
                                variant="subtitle1"
                                sx={{ color: "#C9C9C9" }}
                              >
                                KCK
                              </Typography>
                            </Box>
  
                            <Box
                              mt={4}
                              borderRight="2px solid #CB3694"
                              height="5rem"
                            />
  
                            <Box p={3} pr={14}>
                              <Typography
                                variant="subtitle1"
                                fontSize="2rem"
                                fontWeight="bold"
                              >
                                1332
                              </Typography>
                              <Typography variant="subtitle1">
                                No of Stakers
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Container>
                    </div>
                    <Container>
                      <div className="flex justify-start items-start py-5">
                        <Typography
                          fontSize="1.8rem"
                          variant="subtitle1"
                          fontWeight="bold"
                        >
                          Balances
                        </Typography>
                      </div>
                    </Container>
                    <div className="bg-[#16182D] border-4 border-pink-500 py-12 rounded-3xl">
                      <Container>
                        <Box>
                          <Box className="flex justify-between py-4">
                            <Box className="flex">
                              <Image src={images.kck} alt="" />
                              <Typography fontSize="1.8rem" className="p-3">
                                KCK
                              </Typography>
                            </Box>
                            <Box>
                              <Typography fontSize="1.8rem" className="p-3 mr-10">
                                0
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            borderRadius="10px"
                            sx={{
                              background:
                                "linear-gradient(to right, #5133D5 30%,#CB3694  70%)",
                            }}
                            style={{ width: "100%", height: "0.1rem" }}
                            mb={2}
                          />
                        </Box>
  
                        <Box>
                          <Box className="flex justify-between py-4">
                            <Box className="flex">
                              <Image src={images.tether} alt="" />
                              <Typography fontSize="1.8rem" className="p-3">
                                KCK
                              </Typography>
                            </Box>
                            <Box>
                              <Typography fontSize="1.8rem" className="p-3 mr-10">
                                0
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            borderRadius="10px"
                            sx={{
                              background:
                                "linear-gradient(to right, #5133D5 30%,#CB3694  70%)",
                            }}
                            style={{ width: "100%", height: "0.1rem" }}
                            mb={2}
                          />
                        </Box>
  
                        <Box>
                          <Box className="flex justify-between py-4">
                            <Box className="flex">
                              <Typography fontSize="1.8rem" className="p-3">
                                o KCK
                              </Typography>
                            </Box>
                            <Box>
                              <StyledButton2
                                variant="contained"
                                className="bg-[#C2338E] mt-4 rounded-3xl"
                                sx={{ fontweight: "bold", width: "10rem" }}
                              >
                                Claim Now!
                              </StyledButton2>
                            </Box>
                          </Box>
                        </Box>
                      </Container>
                    </div>
                  </Grid>
  
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box className="flex justify-center items-center pb-10">
                      <Stack direction="row" spacing={3}>
                        <Button
                          variant="contained"
                          className="rounded-3xl bg-[#5133D5] w-[12rem] "
                          sx={{ fontSize: "1.2rem" }}
                        >
                          STAKE
                        </Button>
                        <Button
                          variant="contained"
                          className="rounded-3xl bg-[none] w-[12rem] "
                          sx={{ fontSize: "1.2rem", border: "2px solid #C2338E",color:"white", background:"transparent" }}
                        >
                          UNSTAKE
                        </Button>
                      </Stack>
                    </Box>
  
                    <div className="bg-[#16182D] border-4 border-pink-500 mt-12 pt-12 rounded-3xl">
                      <Container>
                        <Box className="pb-10">
                          <Box className="flex justify-between">
                            <Typography variant="h5" fontSize="1.5rem">
                              Stake
                            </Typography>
                            <Box>
                              <SettingsIcon sx={{ color: "white" }} />
                            </Box>
                          </Box>
                        </Box>
  
                        <Box >
                          <Box className="flex justify-between border-2 rounded-[45px] py-2 my-8">
                            <Box className="flex px-2">
                              <Image src={images.kck} alt="" />
                              <Typography
                                variant="subtitle1"
                                fontSize="2rem"
                                className="px-3"
                              >
                                0.0
                              </Typography>
                            </Box>
                            <Box className="p-2">
                              <Button
                                variant="contained"
                                className="rounded-3xl bg-[#C2338E] w-[6rem] "
                                sx={{ fontSize: "1.2rem" }}
                              >
                                STAKE
                              </Button>
                            </Box>
                          </Box>
  
                          <Box className="flex items-center justify-center">
                            <StyledButton3
                              variant="contained"
                              className="rounded-[45px] bg-[#5133D5] w-[90%] py-3  "
                              sx={{ fontSize: "1.2rem" }}
                            >
                              STAKE
                            </StyledButton3>
                          </Box>
  
                            <Box mt={18}>
                          <Box className="flex justify-between py-4">
                            <Box className="flex">
                              <Typography variant="subtitle1"  className="p-3" sx={{color:"#C9C9C9"}}>
                                You Will Receive
                              </Typography>
                            </Box>
                            <Box>
                              <Typography className="p-3 mr-10" sx={{color:"#C9C9C9"}}>
                                0 USDT
                              </Typography>
                            </Box>
                          </Box>
  
                          <Box className="flex justify-between ">
                            <Box className="flex">
                              <Typography variant="subtitle1"  className="p-3" sx={{color:"#C9C9C9"}}>
                                Exchange Rate
                              </Typography>
                            </Box>
                            <Box>
                              <Typography className="p-3 mr-10" sx={{color:"#C9C9C9"}}>
                              1 USDT = 2.56 KCK
                              </Typography>
                            </Box>
                          </Box>
  
                          <Box className="flex justify-between pb-20 ">
                            <Box className="flex">
                              <Typography variant="subtitle1"  className="p-3" sx={{color:"#C9C9C9"}}>
                                Staking KCK
                              </Typography>
                            </Box>
                            <Box>
                              <Typography className="p-3 mr-10" sx={{color:"#C9C9C9"}}>
                              8.9%
                              </Typography>
                            </Box>
                          </Box>
                          
                        </Box>
  
  
                        </Box>
                      </Container>
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </Box>
  
          <Footer />
        </div>
      </>
    );
  }