import React, {useContext, useEffect} from 'react';
import {redirect, Route, Routes, useNavigate} from "react-router";
import Osint from "./audit/osint/osint";
import Pentest from "./audit/pentest/pentest";
import HomeComponent from "../pages/home/homeComponent";
import ExecutorList from "./helpDesk/student/executorlist";
import CreateReference from "./helpDesk/reference/createReference/createReference";
import Referencelist from "./helpDesk/reference/referencelist";
import CreateBypassSheet from "./helpDesk/bypassSheet/createBypassSheet/createBypassSheet";
import ExaminationPage from "./helpDesk/reference/examination/examination";
import BypassSheetlist from "./helpDesk/bypassSheet/bypassSheetlist";
import LoginForm from "../pages/auth/login/LoginForm";
import SingInForm from "../pages/auth/singIn/SingInForm";
import {useDispatch, useSelector} from "react-redux";
import {fetchReferenceType} from "../store/action.creators/referenceType";
import {fetchBypassSheet} from "../store/action.creators/bypassSheet";
import HeaderContainer from "./layout/header/helpDesk/header.container";
import Profile from "../pages/auth/profile/profile";
import CustomerList from "./helpDesk/customer/customerList";
import OrderList from "./helpDesk/order/orderList";
import ProductList from "./helpDesk/product/productList";
import CreateOrderPage from "./helpDesk/order/CreateOrder/CreateOrder";
import CreateProductPage from "./helpDesk/product/CreateProduct/CreateProduct";
import PostsList from "./helpDesk/posts/postsList";
import ReferenceList from "./helpDesk/reference/referencelist"
import HelpDesk from "../pages/helpDesk/helpDesk";
import Footer from "./layout/footer/footer";
import Audit from "../pages/audit/audit";
import AuditHome from "../pages/audit/home/home";
import HelpDeskHome from "../pages/helpDesk/home/home";
import DocsAudit from "./audit/docs/docs";
import OsintDocs from "./audit/docs/osint/osint";
import PentestDocs from "./audit/docs/pentest/pentest";
import AuditDocsMain from "./audit/docs/main/main";
import OsintList from "./audit/osint/list/osint";
import OsintNew from "./audit/osint/new/new";
import OsintDoc from "./audit/osint/list/osintDoc/osintDoc";
import CommandConsole from "./cmd kali linux/CommandConsole";
import PentestNew from "./audit/pentest/new/new";
import PentestList from "./audit/pentest/list/pentest";
import PentestDoc from "./audit/pentest/list/osintDoc/pentestDoc";


const Router = () => {
    const dispatch = useDispatch();
    var user = useSelector(state => state.auth)
    let navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchReferenceType());
        dispatch(fetchBypassSheet());
    }, []);

    useEffect(() => {
        if(window.count == 1){
            navigate("/login")
        }
    }, [navigate]);



    return (
    <div>

      <Routes>

          <Route path={'/'} element={<HomeComponent/>}></Route>
          <Route path={'/login'} element={<LoginForm/>}></Route>
          <Route path={'/singin'} element={<SingInForm/>}></Route>
      </Routes>
        {
            user.isLoggedIn ?
                <Routes>
                    {/*<Route path={'/'} element={<HomePage/>}></Route>*/}
                    <Route path={'/audit'} element={<Audit/>}>
                        <Route path={''} element={<AuditHome/>}></Route>
                        <Route path={'CMDKALI'} element={<CommandConsole/>}></Route>
                        <Route path={'OSINT'} element={<Osint/>}>
                            <Route path={''} element={<OsintList/>}></Route>
                            <Route path={'osint'} element={<OsintDoc/>}>
                                <Route path={':id'} element={<OsintDoc></OsintDoc>}/>
                            </Route>
                            <Route path={'new'} element={<OsintNew/>}></Route>
                        </Route>
                        <Route path={'Pentest'} element={<Pentest/>}>
                            <Route path={''} element={<PentestList/>}></Route>
                            <Route path={'pentest'} element={<PentestDoc/>}>
                                <Route path={':id'} element={<PentestDoc></PentestDoc>}/>
                            </Route>
                            <Route path={'new'} element={<PentestNew/>}></Route>
                        </Route>
                        <Route path={'docs'} element={<DocsAudit/>}>
                            <Route path={''} element={<AuditDocsMain/>}></Route>
                            <Route path={'osint'} element={<OsintDocs/>}>

                            </Route>
                            <Route path={'pentest'} element={<PentestDocs/>}></Route>
                        </Route>
                    </Route>
                    <Route path={'/HelpDesk'} element={<HelpDesk/>}>
                        <Route path={''} element={<HelpDeskHome/>}></Route>
                        <Route path={'executors'} element={<ExecutorList/>}></Route>
                        <Route path={'customers'} element={<CustomerList/>}></Route>
                        <Route path={'orders'} element={<OrderList/>}></Route>
                        <Route path={'products'} element={<ProductList/>}></Route>
                        <Route path={'orders_create'} element={<CreateOrderPage/>}></Route>
                        <Route path={'products_create'} element={<CreateProductPage/>}></Route>
                        <Route path={'posts'} element={<PostsList/>}></Route>

                        <Route path={'create-reference'} element={<CreateReference/>}></Route>
                        <Route path={'reference'} element={<ReferenceList/>}></Route>
                        <Route path={'create-bypassSheet'} element={<CreateBypassSheet/>}></Route>
                        <Route path={'reference/examination'} element={<ExaminationPage/>}>
                            <Route path={':referenceId'} element={<ExaminationPage></ExaminationPage>}/>
                        </Route>
                        <Route path={'bypassSheet'} element={<BypassSheetlist/>}></Route>
                    </Route>
                    <Route path={'/profile'} element={<Profile/>}></Route>
                </Routes>
                : null
        }

    </div>
  );
};

export default Router;
