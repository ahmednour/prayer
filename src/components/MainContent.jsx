import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';
import Cards from './Cards';
export default function MainContent() {
  return (
    <>
      {/*== top row ==*/}
      <Grid container>
        <Grid xs={6}>
          <div className="RegionNameCont">
            <h2><span className="RDate">9 سبتمر 2023 </span>|<span className="RTime">4:20</span></h2>
            <h1 className='RegionName'>مكة المكرمة</h1>
          </div>
        </Grid>
        <Grid xs={6}>
          <div className="NextPrayCont">
            <h2 className="NextText">متبقي حتي صلاة <span className="PrayName"> المغرب</span></h2>
            <h2 className="TimeToPray">1:5:28</h2>
          </div>
        </Grid>
      </Grid>
      {/*== top row end ==*/}
      <Divider />
      {/*== prayer cards ==*/}
      <Grid container sx={{mt:3}} spacing={3} variant="middle">
        <Grid xs><Cards Image="https://wepik.com/api/image/ai/9a273852-af53-46c1-9b1b-fb3a91923fd9?thumb=1" Name="الفجر" Time="04:00" /></Grid>
        <Grid xs><Cards Image="https://wepik.com/api/image/ai/9a27394e-c874-49a4-8948-435ce76ee80f?thumb=1" Name="الظهر" Time="12:10" /></Grid>
        <Grid xs><Cards Image="https://wepik.com/api/image/ai/9a2738b6-06d9-4bd5-a1f0-55dd6b3d7d41?thumb=1" Name="العصر" Time="03:20" /></Grid>
        <Grid xs><Cards Image="https://wepik.com/api/image/ai/9a273767-82cd-45a1-acff-ae0ea40c4384?thumb=1" Name="المغرب" Time="06:10" /></Grid>
        <Grid xs><Cards Image="https://wepik.com/api/image/ai/9a27394e-777f-4318-9c1c-38d6d7cbb394?thumb=1" Name="العشاء" Time="07:45" /></Grid>
      </Grid>
    </>
  );
}
