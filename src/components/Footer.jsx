import * as React from 'react';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link, TextField, Typography } from '@mui/material';





export default function Footer() {


  return (
    <div className='footer' style={{display:"flex", paddingTop: "3vh", backgroundColor:"rgb(140, 56, 97, 0.7  )"}}>
      <Grid container spacing={2} columns={4} sx={{ justifyContent: "center" }}>
        <Grid item xs={4} sm={1} sx={{ justifyContent: "center" }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
            Copyright 2022
          </Typography>

          <div style={{ display: "flex", justifyContent: "center", gridColumnGap: "8%", padding: "2vh 0"}}>
            <Link href="https://www.facebook.com/" color="inherit">
              <FacebookIcon sx={{ fontSize: "50px" }} />
            </Link>
            <Link href="/https://www.whatsapp.com/" color="inherit">
            <WhatsAppIcon id="whatsapp" sx={{ fontSize: "50px" }} />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit" >
            <TwitterIcon id="twitter" sx={{ fontSize: "50px" }} />
            </Link>

          </div>
          </Grid >
      </Grid >

    </div >
  )
}

