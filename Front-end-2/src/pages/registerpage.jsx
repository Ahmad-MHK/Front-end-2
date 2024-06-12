
import '../App.css'
import LeftBar from '../LeftBar/LeftBar'
import Topbar from '../RightSide/TopBar'
import LoginBlock from '../RightSide/login-register/register-block'
 
 
function Registerpage(){
   
    return (
        <div className="row">
            <LeftBar></LeftBar>
            <div className="right-login">
            <LoginBlock>
               
            </LoginBlock>
            </div>
        </div>
    )
   
}
export default Registerpage