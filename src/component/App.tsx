import React from 'react';
import {
    AppBar,
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Container,
    Divider,
    Grid,
    IconButton,
    Stack,
    Toolbar,
    Typography
} from "@mui/material";
import TelegramIcon from '@mui/icons-material/Telegram';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faVk} from '@fortawesome/free-brands-svg-icons'
import {faTiktok} from '@fortawesome/free-brands-svg-icons'
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import {blue, lightBlue, pink, red} from "@mui/material/colors";
import RuStoreIcon from "../util/RuStoreIcon";
import VKPlayIcon from "../util/VKPlayIcon";

function App() {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        href="/"
                        sx={{
                            p: 0,
                            mr: 2
                        }}
                    >
                        <Avatar src="logo40.png"/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        flexGrow={1}
                    >
                        ISAEV
                    </Typography>
                    <IconButton
                        href="https://t.me/isaev_inc"
                        target="_blank"
                        sx={{
                            color: blue[500]
                        }}
                    >
                        <TelegramIcon/>
                    </IconButton>
                    <IconButton
                        href="https://vk.com/isaev_inc"
                        target="_blank"
                        sx={{
                            color: lightBlue[500],
                            width: 40
                        }}
                    >
                        <FontAwesomeIcon icon={faVk}/>
                    </IconButton>
                    <IconButton
                        href="https://youtube.com/@isaev_inc"
                        target="_blank"
                        sx={{
                            color: red[500]
                        }}
                    >
                        <YouTubeIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={0}
                height={480}
                sx={{
                    backgroundImage: 'url(bg.jpg)'
                }}
            >
                <Typography variant="h1">ISAEV</Typography>
                <Typography variant="subtitle1" align="center" maxWidth={600}>
                    ???? ?????????? ???????????? ?????????? ??????????????????, ???????????????????????? ?? ?????????? ????????????????, ?????????????? ?????????? ???????????? ?? ??????????????????????
                    ????????????????????.
                </Typography>
            </Stack>
            <Container sx={{pt: 4}}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/6vR1--XnnF8"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h2" mb={4}>Ike Norris</Typography>
                        <Typography mb={4}>
                            ?????? ???? ?????? ??????????? ?????????????? ?????????????? ?? ?????????? ?????????????????????? ??????, ?? ?????????? ???????? ?????????? ??????????! ?????? ????
                            ???????????? ????????????????????, ?????????? ???????? ?????????? ???????????? ???????????? ?? ??????. ???????? ???????? ???????????????????? ???? ??????????, ????????
                            ???????? ???? ???????? ??????????????????!
                        </Typography>
                        <Button
                            variant="outlined"
                            startIcon={<RuStoreIcon/>}
                            href="https://apps.rustore.ru/app/com.isaev.ikenorris"
                            target="_blank"
                            sx={{mr: 1}}
                        >
                            RuStore
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<VKPlayIcon/>}
                            href="https://vkplay.ru/play/game/ike_norris"
                            target="_blank"
                            sx={{mr: 1}}
                        >
                            VK Play
                        </Button>
                        <Button
                            color="secondary"
                            href="https://onerpm.link/684066956001"
                            target="_blank"
                        >
                            ??????????????????
                        </Button>
                    </Grid>
                </Grid>
                <Divider sx={{my: 4}}/>
                <Typography variant="h2" align="center" gutterBottom>??????????????</Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <Card>
                            <CardHeader
                                avatar={<Avatar sx={{bgcolor: blue[500]}}><TelegramIcon/></Avatar>}
                                title="Telegram"
                                subheader="@isaev_inc"
                            />
                            <CardContent>
                                <Typography>
                                    ?????????? ?????????????????????? ?????????????? ?????? ???????? ??????????????, ?????????????? ?????????? ???????????? ?? ??????????????????????
                                    ????????????????????.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <Button
                                    href="https://t.me/isaev_inc"
                                    target="_blank"
                                    sx={{
                                        color: blue[500]
                                    }}
                                >
                                    ????????????????????????????
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card>
                            <CardHeader
                                avatar={<Avatar sx={{bgcolor: lightBlue[500]}}><FontAwesomeIcon icon={faVk}/></Avatar>}
                                title="VK"
                                subheader="@isaev_inc"
                            />
                            <CardContent>
                                <Typography>
                                    ???????????????? ?????????????????? ?????? ?????????????? ????????????????, ?????? ?????? ?? Telegram - ?????????????????????? ?? ?? VK.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <Button
                                    href="https://vk.com/isaev_inc"
                                    target="_blank"
                                    sx={{
                                        color: lightBlue[500]
                                    }}
                                >
                                    ????????????????????????????
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card>
                            <CardHeader
                                avatar={<Avatar sx={{bgcolor: red[500]}}><YouTubeIcon/></Avatar>}
                                title="YouTube"
                                subheader="@isaev_inc"
                            />
                            <CardContent>
                                <Typography>
                                    ??????????, ?????????????????? ?? ???????????? ??????????????????, ???????????????? ????????????????????, ???????????????? ?? ???????????? ????????????!
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <Button
                                    href="https://youtube.com/@isaev_inc"
                                    target="_blank"
                                    sx={{
                                        color: red[500]
                                    }}
                                >
                                    ????????????????????????????
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                <Divider sx={{my: 4}}/>
                <Typography variant="h2" align="center" gutterBottom>?? ??????</Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Card>
                            <CardHeader
                                avatar={<Avatar src="nanaki.jpg" alt="Nanaki"/>}
                                title="Nanaki"
                                subheader="???????????? ??????????"
                            />
                            <CardContent>
                                <Typography>
                                    ??????????, ???????? ?????????? ????????????! ?? ?????????? ?????????? ?????????????????? ?????? ?????????????????? Nanaki. ?? ????????????????
                                    ???????? ?? ??????????????????????, ?????????????????? ?????????? ?????????? ?? ????????, ?????? ?? ???????? ??????????????.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton
                                    href="https://instagram.com/__nanaki__"
                                    target="_blank"
                                    sx={{
                                        color: pink[500]
                                    }}
                                >
                                    <InstagramIcon/>
                                </IconButton>
                                <IconButton
                                    href="https://t.me/nanaki_lucis"
                                    target="_blank"
                                    sx={{
                                        color: blue[500]
                                    }}
                                >
                                    <TelegramIcon/>
                                </IconButton>
                                <IconButton
                                    href="https://vk.com/nanaki"
                                    target="_blank"
                                    sx={{
                                        color: lightBlue[500],
                                        width: 40
                                    }}
                                >
                                    <FontAwesomeIcon icon={faVk}/>
                                </IconButton>
                                <IconButton
                                    href="https://youtube.com/@nanaki_x"
                                    target="_blank"
                                    sx={{
                                        color: red[500]
                                    }}
                                >
                                    <YouTubeIcon/>
                                </IconButton>
                                <IconButton
                                    href="https://tiktok.com/@nanaki_x"
                                    target="_blank"
                                    sx={{
                                        width: 40
                                    }}
                                >
                                    <FontAwesomeIcon icon={faTiktok}/>
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card>
                            <CardHeader
                                avatar={<Avatar src="elguraya.jpg" alt="Elguraya"/>}
                                title="Elguraya"
                                subheader="?????????????????? ????????????"
                            />
                            <CardContent>
                                <Typography>
                                    ???????????? ????????, ?? ??????????????????! ?? ?????????? ?? ???????????????? ???????? ?????????? ?????????? ???? ???????????????? Elguraya.
                                    ?? ??????????????????????, ?????????? ???????????????? ?? ???????????????? ?? ????????????????, ???????????????? ????????????.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton
                                    href="https://instagram.com/elguraya"
                                    target="_blank"
                                    sx={{
                                        color: pink[500]
                                    }}
                                >
                                    <InstagramIcon/>
                                </IconButton>
                                <IconButton
                                    href="https://t.me/elguraya"
                                    target="_blank"
                                    sx={{
                                        color: blue[500]
                                    }}
                                >
                                    <TelegramIcon/>
                                </IconButton>
                                <IconButton
                                    href="https://vk.com/elguraya"
                                    target="_blank"
                                    sx={{
                                        color: lightBlue[500],
                                        width: 40
                                    }}
                                >
                                    <FontAwesomeIcon icon={faVk}/>
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                <Divider sx={{my: 4}}/>
                <Typography variant="overline" align="center" gutterBottom display="block">
                    high tech, low life
                </Typography>
            </Container>
        </>
    )
}

export default App
