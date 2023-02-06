import { TbSearch } from 'react-icons/tb';
import logo from '../../assets/img/Netflix-logo-red-black-png.png';
import { useScrolly } from '../../hooks';
import './Navbar.css';

function Navbar(props) {
    const [scrolly] = useScrolly();

    return (
        <div className="Navigation" style={scrolly < 50 ? { backgroundColor: "transparent" } : { backgroundColor: 'var(--color-background)' }}>
            <div className="navContainer">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="navSearch">
                    <TbSearch className='iconSearch' />
                    <input type="text" placeholder="input title, genres, people" />
                </div>
            </div>
        </div>
    )
}

export default Navbar;

// // const Navigation = styled.div`
//     width: 100px;
//     height: 80px;
//     position: fixed;
//     top: 0;
//     transition-timing-function: ease-in;
//     transition: all 1s;

//     @media only screen and (max-width: 600px){
//         height: 100px
//     }

//     .navContainer{
//         width: 34cm;
//         background-color: var(--color-background);
//         display: flex;
//         align-items: center;
//         flex-direction: row;
//         justify-content: flex-start;
//         height: 100%;

//         @media only screen and (max-width: 600px){
//             flex-direction: column;
//         }

//         .logo{
//             width: 120px;
//             cursor: pointer;
//             img {
//                 width: 100%;
//             }
//         }

//         .navSearch{
//             color: var(--color-white);
//             padding-right: 20px;
//             display: flex;
//             justify-content: flex-end;

//             &:hover .iconSearch{
//                 color: var(--color-white);
//             }

//             .iconSearch{
//                 width: 29px;
//                 height: 20px;
//                 cursor: pointer;
//                 transform: translateX(24px) translateY(10px);
//                 color: #bbb;
//             }

//             input{
//                 background-color: var(--color-background);
//                 font-size: 14px;
//                 border: 1px solid #fff;
//                 color: white;
//                 outline: none;
//                 width: 0;
//                 padding: 10px;
//                 cursor: pointer;
//                 opacity: 0;
//                 transition: width 0.5s;

//                 &:focus {
//                     padding-left: 26px;
//                     width: 300px;
//                     cursor: text;
//                     opacity: 1;
//                     border-radius: 4px;
//                 }
//             }
//         }
//     }
// `;