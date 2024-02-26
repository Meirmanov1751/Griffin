import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';

import Analytics from './audit/analytics/analytics';
import Audit from '../pages/audit/audit';
import AuditDocsMain from './audit/docs/main/main';
import BypassSheetlist from './helpDesk/bypassSheet/bypassSheetlist';
import CommandConsole from './cmd kali linux/CommandConsole';
import CreateBypassSheet from './helpDesk/bypassSheet/createBypassSheet/createBypassSheet';
import CreateOrderPage from './helpDesk/order/CreateOrder/CreateOrder';
import CreateProductPage from './helpDesk/product/CreateProduct/CreateProduct';
import CustomerList from './helpDesk/customer/customerList';
import DocsAudit from './audit/docs/docs';
import ExaminationPage from './helpDesk/reference/examination/examination';
import ExecutorList from './helpDesk/student/executorlist';
import HomeComponent from '../pages/home/homeComponent';
import HelpDesk from '../pages/helpDesk/helpDesk';
import HelpDeskHome from '../pages/helpDesk/home/home';
import LoginForm from '../pages/auth/login/LoginForm';
import NetCardPanel from './audit/home/project/projectItem/policy panel/net card/netCard';
import OrderList from './helpDesk/order/orderList';
import Osint from './audit/osint/osint';
import OsintDocs from './audit/docs/osint/osint';
import OsintDoc from './audit/osint/list/osintDoc/osintDoc';
import OsintList from './audit/osint/list/osint';
import OsintNew from './audit/osint/new/new';
import Pentest from './audit/pentest/pentest';
import PentestDocs from './audit/docs/pentest/pentest';
import PentestDoc from './audit/pentest/list/osintDoc/pentestDoc';
import PentestList from './audit/pentest/list/pentest';
import PentestNew from './audit/pentest/new/new';
import Policy from './audit/home/project/projectItem/security/Policy';
import PolicyPanel from './audit/home/project/projectItem/policy panel/policy';
import PostsList from './helpDesk/posts/postsList';
import PrivacyPanel from './audit/home/project/projectItem/policy panel/policy privacy/privacy';
import Procedures from './audit/home/project/projectItem/security/Procedures';
import ProcedurPanel from './audit/home/project/projectItem/policy panel/procedur/procedur';
import ProductList from './helpDesk/product/productList';
import Profile from '../pages/auth/profile/profile';
import ReferenceList from './helpDesk/reference/referencelist';
import Schedule from './audit/home/project/projectItem/security/Schedule/Schedule';
import Standard from './audit/home/project/projectItem/security/Standard';
import StandardPanel from './audit/home/project/projectItem/policy panel/standard/standard';
import {fetchReferenceType} from "../store/action.creators/referenceType";
import SingInForm from "../pages/auth/singIn/SingInForm";
import AuditHome from "../pages/audit/home/home";
import CreateReference from "./helpDesk/reference/createReference/createReference";
import ProjectItem from "./audit/home/project/projectItem/projectItem";


const Router = () => {
    var user = useSelector(state => state.auth)
    let navigate = useNavigate();
    let dispatch = useDispatch();

    const dispatchReferenceType = async () => {
        dispatch(fetchReferenceType())
    }

    useEffect(() => dispatchReferenceType, []);

    useEffect(() => {if(window.count === 1) navigate("/login")} , [navigate]);

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<HomeComponent/>}></Route>
                <Route path={'/login'} element={<LoginForm/>}></Route>
                <Route path={'/singin'} element={<SingInForm/>}></Route>
            </Routes>
            {user.isLoggedIn ? <Routes>
                <Route path={'/audit'} element={<Audit/>}>
                    <Route path={''} element={<AuditHome/>}></Route>
                    <Route path={'analytics'} element={<Analytics/>}></Route>
                    <Route path={'CMDKALI'} element={<CommandConsole/>}></Route>
                    <Route path={'OSINT'} element={<Osint/>}>
                        <Route path={''} element={<OsintList/>}></Route>
                        <Route path={'osint'} element={<OsintDoc/>}>
                            <Route path={':id'} element={<OsintDoc></OsintDoc>}/>
                        </Route>
                        <Route path={'edit'} element={<OsintNew/>}>
                            <Route path={':id'} element={<OsintNew></OsintNew>}/>
                        </Route>
                        <Route path={'new'} element={<OsintNew/>}></Route>
                    </Route>
                    <Route path={'Pentest'} element={<Pentest/>}>
                        <Route path={''} element={<PentestList/>}></Route>
                        <Route path={'pentest'} element={<PentestDoc/>}>
                            <Route path={':id'} element={<PentestDoc></PentestDoc>}/>
                        </Route>
                        <Route path={'edit'} element={<PentestNew/>}>
                            <Route path={':id'} element={<PentestNew></PentestNew>}/>
                        </Route>
                        <Route path={'new'} element={<PentestNew/>}></Route>
                    </Route>
                    <Route path={'project'}>
                        <Route path={':id'} element={<ProjectItem></ProjectItem>}>
                            <Route path={''} element={<Policy/>}></Route>
                            <Route path={'policy'} element={<Policy/>}></Route>
                            <Route path={'procedur'} element={<Procedures/>}></Route>
                            <Route path={'schedule'} element={<Schedule/>}></Route>
                            <Route path={'standard'} element={<Standard/>}></Route>
                        </Route>
                    </Route>
                    <Route path={'policy_panel'}>
                        <Route path={':id'} element={<PolicyPanel/>}>
                            <Route path={''} element={<PrivacyPanel/>}></Route>
                            <Route path={'policy'} element={<PrivacyPanel/>}></Route>
                            <Route path={'procedur'} element={<ProcedurPanel/>}></Route>
                            <Route path={'standard'} element={<StandardPanel/>}></Route>
                            <Route path={'newCart'} element={<NetCardPanel/>}></Route>
                        </Route>
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
            </Routes> : null}
        </div>
    );
};

export default Router;
