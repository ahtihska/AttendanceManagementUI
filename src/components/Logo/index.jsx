import DSF from "../../images/logo.png";
const Logo = () => {
  return (
    <img src={DSF} className="App-logo" alt="logo" title="Target Ready Logo" />
  );
};
export default Logo;
const useStyles = makeStyles((theme) => ({
  logo: {
    width: 30,
    height: 30,
    marginRight: theme.spacing(1),