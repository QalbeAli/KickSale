import {
  Typography,
  Container,
  Button,
  Stack,
  styled,
  Grid,
} from '@mui/material'
import Box from '@mui/material/Box'
import Image from 'next/image'
import Link from 'next/link'
import images from '../../public/images/Images'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import Footer from '../Footer'
const StyledButton2 = styled(Button)(
  ({ theme }) => `
  box-shadow: 0 7px 22px 2px #5133d599;
  &:hover {
      background-color:#16182D; ;
  }
  `
)

export default function Project() {
  return (
    <>
      <Box>
        <Container>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography variant="h2" fontWeight="bold">
              Projects
            </Typography>
          </Box>
          <Box pl={3}>
            <Typography variant="h5" fontWeight="bold">
              Live Project
            </Typography>
          </Box>

          <Box py={3}>
            <Grid container spacing={8}>
            <Grid item xs={12} sm={12} md={6} xl={6}>
                <Box
                  border="7px solid #CB3694"
                  sx={{
                    borderRadius: '45px',
                  }}
                >
                  <Box
                    sx={{
                      borderTopLeftRadius: '40px',
                      borderTopRightRadius: '40px',
                      overflow: 'hidden',
                    }}
                    style={{ borderTopRightRadius: '50px' }}
                  >
                    <Image src={images.projectcard1} alt="image" />
                  </Box>
                  <Box
                    pt={2}
                    sx={{
                      backgroundColor: '#16182D',
                      borderBottomLeftRadius: '40px',
                      borderBottomRightRadius: '44px',
                    }}
                  >
                    <Container>
                      <Box sx={{ borderLeft: '3.5px solid #CB3694' }}>
                        <Box display="flex">
                          <Box px={3} py={2}>
                            <StyledButton2
                              variant="contained"
                              sx={{
                                background: '#5133D5',
                                borderRadius: '20px',
                              }}
                              className="bg-[#5133D5]"
                            >
                              REGISTRATION CLOSED
                            </StyledButton2>
                          </Box>
                          <Box pt={3}>
                            <Image
                              src={images.avax}
                              alt="image"
                              width="25"
                              height="25"
                            />
                          </Box>
                          <Box py={2}>
                            <Typography variant="subtitle1" pt={1} px={1}>
                              AVAX
                            </Typography>
                          </Box>
                        </Box>

                        <Box px={3}>
                          <Typography variant="h3">MetaLand</Typography>
                        </Box>

                        <Box px={3}>
                          <Typography variant="subtitle2">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which dont look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isnt anything.
                          </Typography>
                        </Box>
                      </Box>

                      <Box py={3}>
                        <Stack direction="row" spacing={3}>
                          <TwitterIcon
                            sx={{
                              color: '#CB3694',
                              width: '40px',
                              height: '40px',
                            }}
                          />

                          <FacebookIcon
                            sx={{
                              color: '#CB3694',
                              width: '40px',
                              height: '40px',
                            }}
                          />

                          <InstagramIcon
                            sx={{
                              color: '#CB3694',
                              width: '40px',
                              height: '40px',
                            }}
                          />

                          <LinkedInIcon
                            sx={{
                              color: '#CB3694',
                              width: '40px',
                              height: '40px',
                            }}
                          />
                        </Stack>
                      </Box>
                      <Box
                        mb={3}
                        sx={{
                          background:
                            'linear-gradient(to right, #CB3694 30%,#5133D5  70%)',
                        }}
                        className="rounded-3xl flex justify-around"
                      >
                        <Box width="97%" >
                          <Box
                            my={1}
                            display="flex"
                            justifyContent="space-between"
                            borderRadius="20px"
                            
                            sx={{ background: '#16182D',  }}
                          >
                            <Box p={3}>
                              <Typography variant="subtitle1">
                                FCFS OPEN <br /> TBA
                              </Typography>
                            </Box>

                            <Box
                              mt={2}
                              borderRight="2px solid #CB3694"
                              height="5rem"
                            />

                            <Box p={3}>
                              <Typography variant="subtitle1">
                                FCFS CLOSE <br /> TBA
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>

                      <Box>
                        <Typography variant="h6">Whitelist end In:</Typography>
                        <Typography variant="h6">01:04:32:15</Typography>
                      </Box>

                      <Box
                        py={3}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <StyledButton2
                          variant="contained"
                          sx={{
                            width: '10rem',
                            borderRadius: '20px',
                          }}
                          className="bg-[#5133D5]"
                        >
                          Purchase
                        </StyledButton2>
                      </Box>
                    </Container>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={6} xl={6}>
                <Box
                  border="7px solid #CB3694"
                  sx={{
                    borderRadius: '45px',
                  }}
                >
                  <Box
                    sx={{
                      borderTopLeftRadius: '40px',
                      borderTopRightRadius: '40px',
                      overflow: 'hidden',
                    }}
                    style={{ borderTopRightRadius: '50px' }}
                  >
                    <Image src={images.projectcard2} alt="image" />
                  </Box>
                  <Box
                    pt={2}
                    sx={{
                      backgroundColor: '#16182D',
                      borderBottomLeftRadius: '40px',
                      borderBottomRightRadius: '44px',
                    }}
                  >
                    <Container>
                      <Box sx={{ borderLeft: '3.5px solid #CB3694' }}>
                        <Box display="flex">
                          <Box px={3} py={2}>
                            <StyledButton2
                              variant="contained"
                              sx={{
                                background: '#5133D5',
                                borderRadius: '20px',
                              }}
                              className="bg-[#5133D5]"
                            >
                              REGISTRATION CLOSED
                            </StyledButton2>
                          </Box>
                          <Box pt={3}>
                            <Image
                              src={images.avax}
                              alt="image"
                              width="25"
                              height="25"
                            />
                          </Box>
                          <Box py={2}>
                            <Typography variant="subtitle1" pt={1} px={1}>
                              AVAX
                            </Typography>
                          </Box>
                        </Box>

                        <Box px={3}>
                          <Typography variant="h3">MetaLand</Typography>
                        </Box>

                        <Box px={3}>
                          <Typography variant="subtitle2">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which dont look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isnt anything.
                          </Typography>
                        </Box>
                      </Box>

                      <Box py={3}>
                        <Stack direction="row" spacing={3}>
                          <TwitterIcon
                            sx={{
                              color: '#CB3694',
                              width: '40px',
                              height: '40px',
                            }}
                          />

                          <FacebookIcon
                            sx={{
                              color: '#CB3694',
                              width: '40px',
                              height: '40px',
                            }}
                          />

                          <InstagramIcon
                            sx={{
                              color: '#CB3694',
                              width: '40px',
                              height: '40px',
                            }}
                          />

                          <LinkedInIcon
                            sx={{
                              color: '#CB3694',
                              width: '40px',
                              height: '40px',
                            }}
                          />
                        </Stack>
                      </Box>
                      <Box
                        mb={3}
                        sx={{
                          background:
                            'linear-gradient(to right, #CB3694 30%,#5133D5  70%)',
                        }}
                        className="rounded-3xl flex justify-around"
                      >
                        <Box width="97%" >
                          <Box
                            my={1}
                            display="flex"
                            justifyContent="space-between"
                            borderRadius="20px"
                            
                            sx={{ background: '#16182D',  }}
                          >
                            <Box p={3}>
                              <Typography variant="subtitle1">
                                FCFS OPEN <br /> TBA
                              </Typography>
                            </Box>

                            <Box
                              mt={2}
                              borderRight="2px solid #CB3694"
                              height="5rem"
                            />

                            <Box p={3}>
                              <Typography variant="subtitle1">
                                FCFS CLOSE <br /> TBA
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>

                      <Box>
                        <Typography variant="h6">Whitelist end In:</Typography>
                        <Typography variant="h6">01:04:32:15</Typography>
                      </Box>

                      <Box
                        py={3}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <StyledButton2
                          variant="contained"
                          sx={{
                            width: '10rem',
                            borderRadius: '20px',
                          }}
                          className="bg-[#5133D5]"
                        >
                          Purchase
                        </StyledButton2>
                      </Box>
                    </Container>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            {/* -------------------------------------------------- */}

            <Box pl={3} pt={20}>
              <Typography variant="h5" fontWeight="bold">
                Upcoming Project
              </Typography>
            </Box>
            <Grid container spacing={8} pt={5}>
            <Grid item xs={12} sm={12} md={6} xl={6}>
                <Box
                  border="7px solid #CB3694"
                  sx={{
                    borderRadius: '45px',
                  }}
                >
                  <Box
                    sx={{
                      borderTopLeftRadius: '40px',
                      borderTopRightRadius: '40px',
                      overflow: 'hidden',
                    }}
                    style={{ borderTopRightRadius: '50px' }}
                  >
                    <Image src={images.projectcard3} alt="image" />
                  </Box>
                  <Box
                    pt={2}
                    sx={{
                      backgroundColor: '#16182D',
                      borderBottomLeftRadius: '40px',
                      borderBottomRightRadius: '44px',
                    }}
                  >
                    <Container>
                      <Box sx={{ borderLeft: '3.5px solid #CB3694' }}>
                        <Box display="flex">
                          <Box px={3} py={2}>
                            <StyledButton2
                              variant="contained"
                              sx={{
                                background: '#5133D5',
                                borderRadius: '20px',
                              }}
                              className="bg-[#5133D5]"
                            >
                              UPCOMING PROJECTS
                            </StyledButton2>
                          </Box>
                          <Box pt={3}>
                            <Image
                              src={images.avax}
                              alt="image"
                              width="25"
                              height="25"
                            />
                          </Box>
                          <Box py={2}>
                            <Typography variant="subtitle1" pt={1} px={1}>
                              AVAX
                            </Typography>
                          </Box>
                        </Box>

                        <Box px={3}>
                          <Typography variant="h3">MetaLand</Typography>
                        </Box>

                        <Box px={3}>
                          <Typography variant="subtitle2">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which dont look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isnt anything.
                          </Typography>
                        </Box>
                      </Box>

                      <Box py={3}>
                        <Stack direction="row" spacing={3}>
                          <TwitterIcon
                            sx={{
                              color: '#CB3694',
                              width: '40px',
                              height: '40px',
                            }}
                          />

                          <FacebookIcon
                            sx={{
                              color: '#CB3694',
                              width: '40px',
                              height: '40px',
                            }}
                          />

                          <InstagramIcon
                            sx={{
                              color: '#CB3694',
                              width: '40px',
                              height: '40px',
                            }}
                          />

                          <LinkedInIcon
                            sx={{
                              color: '#CB3694',
                              width: '40px',
                              height: '40px',
                            }}
                          />
                        </Stack>
                      </Box>
                      <Box
                        mb={3}
                        sx={{
                          background:
                            'linear-gradient(to right, #CB3694 30%,#5133D5  70%)',
                        }}
                        className="rounded-3xl flex justify-around"
                      >
                        <Box width="97%" >
                          <Box
                            my={1}
                            display="flex"
                            justifyContent="space-between"
                            borderRadius="20px"
                            
                            sx={{ background: '#16182D',  }}
                          >
                            <Box p={3}>
                              <Typography variant="subtitle1">
                                FCFS OPEN <br /> TBA
                              </Typography>
                            </Box>

                            <Box
                              mt={2}
                              borderRight="2px solid #CB3694"
                              height="5rem"
                            />

                            <Box p={3}>
                              <Typography variant="subtitle1">
                                FCFS CLOSE <br /> TBA
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>

                      <Box>
                        <Typography variant="h6">Whitelist end In:</Typography>
                        <Typography variant="h6">01:04:32:15</Typography>
                      </Box>

                      <Box
                        py={3}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Button
                          variant="contained"
                          sx={{
                            width: '10rem',
                            borderRadius: '20px',
                          }}
                          className="bg-[#C9C9C9]"
                        >
                          Purchase
                        </Button>
                      </Box>
                    </Container>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={6} xl={6}>
                <Box
                  border="7px solid #CB3694"
                  sx={{
                    borderRadius: '45px',
                  }}
                >
                  <Box
                    sx={{
                      borderTopLeftRadius: '40px',
                      borderTopRightRadius: '40px',
                      overflow: 'hidden',
                    }}
                    style={{ borderTopRightRadius: '50px' }}
                  >
                    <Image src={images.projectcard4} alt="image" />
                  </Box>
                  <Box
                    pt={2}
                    sx={{
                      backgroundColor: '#16182D',
                      borderBottomLeftRadius: '40px',
                      borderBottomRightRadius: '44px',
                    }}
                  >
                    <Container>
                      <Box sx={{ borderLeft: '3.5px solid #CB3694' }}>
                        <Box display="flex">
                          <Box px={3} py={2}>
                            <StyledButton2
                              variant="contained"
                              sx={{
                                background: '#5133D5',
                                borderRadius: '20px',
                              }}
                              className="bg-[#5133D5]"
                            >
                              UPCOMING PROJECTS
                            </StyledButton2>
                          </Box>
                          <Box pt={3}>
                            <Image
                              src={images.avax}
                              alt="image"
                              width="25"
                              height="25"
                            />
                          </Box>
                          <Box py={2}>
                            <Typography variant="subtitle1" pt={1} px={1}>
                              AVAX
                            </Typography>
                          </Box>
                        </Box>

                        <Box px={3}>
                          <Typography variant="h3">MetaLand</Typography>
                        </Box>

                        <Box px={3}>
                          <Typography variant="subtitle2">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which dont look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isnt anything.
                          </Typography>
                        </Box>
                      </Box>

                      <Box py={3}>
                        <Stack direction="row" spacing={3}>
                          <TwitterIcon
                            sx={{
                              color: '#CB3694',
                              width: '40px',
                              height: '40px',
                            }}
                          />

                          <FacebookIcon
                            sx={{
                              color: '#CB3694',
                              width: '40px',
                              height: '40px',
                            }}
                          />

                          <InstagramIcon
                            sx={{
                              color: '#CB3694',
                              width: '40px',
                              height: '40px',
                            }}
                          />

                          <LinkedInIcon
                            sx={{
                              color: '#CB3694',
                              width: '40px',
                              height: '40px',
                            }}
                          />
                        </Stack>
                      </Box>
                      <Box
                        mb={3}
                        sx={{
                          background:
                            'linear-gradient(to right, #CB3694 30%,#5133D5  70%)',
                        }}
                        className="rounded-3xl flex justify-around"
                      >
                        <Box width="97%" >
                          <Box
                            my={1}
                            display="flex"
                            justifyContent="space-between"
                            borderRadius="20px"
                            
                            sx={{ background: '#16182D',  }}
                          >
                            <Box p={3}>
                              <Typography variant="subtitle1">
                                FCFS OPEN <br /> TBA
                              </Typography>
                            </Box>

                            <Box
                              mt={2}
                              borderRight="2px solid #CB3694"
                              height="5rem"
                            />

                            <Box p={3}>
                              <Typography variant="subtitle1">
                                FCFS CLOSE <br /> TBA
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>

                      <Box>
                        <Typography variant="h6">Whitelist end In:</Typography>
                        <Typography variant="h6">01:04:32:15</Typography>
                      </Box>

                      <Box
                        py={3}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Button
                          variant="contained"
                          sx={{
                            width: '10rem',
                            borderRadius: '20px',
                          }}
                          className="bg-[#C9C9C9]"
                        >
                          Purchase
                        </Button>
                      </Box>
                    </Container>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  )
}
