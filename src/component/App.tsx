import React from 'react';
import {
    Alert,
    AppBar,
    Avatar,
    Box,
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
                    Мы очень сильно любим видеоигры, рассказываем о наших проектах, делимся своим опытом и бэкстейджем
                    разработки.
                </Typography>
            </Stack>
            <Container sx={{pt: 4}}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <iframe
                            width="100%"
                            height="100%"
                            // width="560"
                            // height="315"
                            src="https://www.youtube.com/embed/6vR1--XnnF8"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                        {/*<Box*/}
                        {/*    sx={{*/}
                        {/*        height: 320,*/}
                        {/*        backgroundImage: 'url(ikenorris.jpg)',*/}
                        {/*        backgroundSize: 'cover',*/}
                        {/*        backgroundPosition: 'center',*/}
                        {/*        backgroundRepeat: 'no-repeat',*/}
                        {/*        borderRadius: 4*/}
                        {/*    }}*/}
                        {/*/>*/}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h2" gutterBottom>Ike Norris</Typography>
                        <Typography mb={4}>
                            Кто же это такой? Хороший мальчик и очень дружелюбный пёс, а также член нашей семьи! Как не
                            сложно догадаться, сюжет игры будет связан именно с ним. Всех карт раскрывать не будем, наша
                            игра об этом расскажет!
                        </Typography>
                        <Alert severity="info" variant="outlined">В разработке</Alert>
                        {/*<a href="/" target="_blank">*/}
                        {/*    <img src="rustore.svg" alt="RuStore"/>*/}
                        {/*</a>*/}
                    </Grid>
                </Grid>
                <Divider sx={{my: 4}}/>
                <Typography variant="h2" align="center" gutterBottom>Сети</Typography>
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
                                    Самые оперативные новости про наши проекты, делимся своим опытом и бэкстейджем
                                    разработки.
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
                                    Присоединиться
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
                                    Запасная платформа для ведения новостей, всё что в Telegram - дублируется и в VK.
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
                                    Присоединиться
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
                                    Видео, связанные с нашими проектами, дневники разработки, трейлеры и многое другое!
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
                                    Присоединиться
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                <Divider sx={{my: 4}}/>
                <Typography variant="h2" align="center" gutterBottom>О нас</Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Card>
                            <CardHeader
                                avatar={<Avatar src="nanaki.jpg" alt="Nanaki"/>}
                                title="Nanaki"
                                subheader="Сергей Исаев"
                            />
                            <CardContent>
                                <Typography>
                                    Добро, меня зовут Сергей! В играх можно встретить под никнеймом Nanaki. В реальном
                                    мире я разработчик, увлекаюсь умным домом и всем, что с этим связано.
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
                                subheader="Маргарита Исаева"
                            />
                            <CardContent>
                                <Typography>
                                    Привет всем, я Маргарита! В играх и соцсетях меня можно найти по никнейму Elguraya.
                                    Я разработчик, люблю рисовать в диджитал и традишке, особенно маслом.
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
