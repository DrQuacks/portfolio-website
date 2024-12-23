import Typography from '@mui/material/Typography';
const TitleText = ({
    title,
    subTitle
}:{
    title: string,
    subTitle?: string
}) => {
    return (
        <div className='homeTitleText'>
          <Typography variant="h2" component="div">
            {title}
          </Typography>
          {subTitle && <Typography variant="h4" component="div">
            {subTitle}
          </Typography>}
        </div>
    )
}
export default TitleText