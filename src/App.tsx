import React from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import {Button, Col, Container, Dropdown, InputGroup, Row} from "react-bootstrap";
import "./components/default.scss";

function App() {
    const [detailNum, setDetailNum] = React.useState(0);
    const initTableData = [
        {
            Pool: {
                icon: "https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-ethereum-coins-cryptocurrency-justicon-lineal-color-justicon.png",
                name: "tricrypto2",
                currencyType: "CRYPTO",
                feild2: "VW",
                feild3: "?",
                detail: "USDT + wBTC + USD"
            },
            BaseVAPY: 0.41,
            RewardstAPR: {
                from: 3.14,
                to: 7.84
            },
            Volume: 28.8,
            TVL: 878.7,
            Fee: 0.030
        },
        {
            Pool: {
                icon: "https://img.icons8.com/cotton/64/000000/nft-collection.png",
                name: "cvxeth",
                currencyType: "CRYPTO",
                feild2: "V2",
                feild3: "",
                detail: "CVX + ETH"
            },
            BaseVAPY: 6.12,
            RewardstAPR: {
                from: 7.38,
                to: 10.21,
            },
            Volume: 16.5,
            TVL: 229,
            Fee: 0.030
        },
        {
            Pool: {
                icon: "https://img.icons8.com/cotton/64/000000/tether--v1.png",
                name: "STG/USDC",
                currencyType: "CRYPTO",
                feild2: "FACTORY",
                feild3: "",
                detail: "STG + USDC"
            },
            BaseVAPY: 9.10,
            RewardstAPR: {
                from: 52.31,
                to: 130.75
            },
            Volume: 38.5,
            TVL: 419.7,
            Fee: 0.030
        },
        {
            Pool: {
                icon: "https://img.icons8.com/external-sbts2018-flat-sbts2018/58/000000/external-settings-cryptocurrency-sbts2018-flat-sbts2018.png",
                name: "3pool",
                currencyType: "USD",
                feild2: "",
                feild3: "",
                detail: "STG + USDC"
            },
            BaseVAPY: 9.10,
            RewardstAPR: {
                from: 0.45,
                to: 1.12,
            },
            Volume: 18.5,
            TVL: 250.2,
            Fee: 0.030
        },
        {
            Pool: {
                icon: "https://img.icons8.com/external-smashingstocks-hand-drawn-black-smashing-stocks/99/000000/external-paper-plane-money-smashingstocks-hand-drawn-black-smashing-stocks.png",
                name: "BTRFLY/ETH",
                currencyType: "CRYPTO",
                feild2: "FACTORY",
                feild3: "",
                detail: "ETH + BTRFLY"
            },
            BaseVAPY: 2.54,
            RewardstAPR: {
                from: 2.82,
                to: 5.14,
            },
            Volume: 17.3,
            TVL: 229,
            Fee: 0.030
        },
        {
            Pool: {
                icon: "https://img.icons8.com/external-sbts2018-flat-sbts2018/58/000000/external-bitcoin-cryptocurrency-sbts2018-flat-sbts2018-4.png",
                name: "frax",
                currencyType: "USD",
                feild2: "",
                feild3: "",
                detail: "FRAK + 3Cry"
            },
            BaseVAPY: 0.30,
            RewardstAPR: {
                from: 2.21,
                to: 5.52,
            },
            Volume: 14.7,
            TVL: 182.2,
            Fee: 0.030
        },
        {
            Pool: {
                icon: "https://img.icons8.com/cotton/64/000000/nft-collection.png",
                name: "cvxeth",
                currencyType: "CRYPTO",
                feild2: "V2",
                feild3: "",
                detail: "CVX + ETH"
            },
            BaseVAPY: 6.12,
            RewardstAPR: {
                from: 7.38,
                to: 10.21,
            },
            Volume: 16.5,
            TVL: 229,
            Fee: 0.030
        },
        {
            Pool: {
                icon: "https://img.icons8.com/cotton/64/000000/nft-collection.png",
                name: "cvxeth",
                currencyType: "CRYPTO",
                feild2: "V2",
                feild3: "",
                detail: "CVX + ETH"
            },
            BaseVAPY: 6.12,
            RewardstAPR: {
                from: 7.38,
                to: 10.21,
            },
            Volume: 16.5,
            TVL: 229,
            Fee: 0.030
        },
        {
            Pool: {
                icon: "https://img.icons8.com/cotton/64/000000/nft-collection.png",
                name: "cvxeth",
                currencyType: "CRYPTO",
                feild2: "V2",
                feild3: "",
                detail: "CVX + ETH"
            },
            BaseVAPY: 6.12,
            RewardstAPR: {
                from: 7.38,
                to: 10.21,
            },
            Volume: 16.5,
            TVL: 229,
            Fee: 0.030
        },
        {
            Pool: {
                icon: "https://img.icons8.com/cotton/64/000000/nft-collection.png",
                name: "cvxeth",
                currencyType: "CRYPTO",
                feild2: "V2",
                feild3: "",
                detail: "CVX + ETH"
            },
            BaseVAPY: 6.12,
            RewardstAPR: {
                from: 7.38,
                to: 10.21,
            },
            Volume: 16.5,
            TVL: 229,
            Fee: 0.030
        },
        {
            Pool: {
                icon: "https://img.icons8.com/cotton/64/000000/nft-collection.png",
                name: "cvxeth",
                currencyType: "CRYPTO",
                feild2: "V2",
                feild3: "",
                detail: "CVX + ETH"
            },
            BaseVAPY: 6.12,
            RewardstAPR: {
                from: 7.38,
                to: 10.21,
            },
            Volume: 16.5,
            TVL: 229,
            Fee: 0.030
        },
        {
            Pool: {
                icon: "https://img.icons8.com/cotton/64/000000/nft-collection.png",
                name: "cvxeth",
                currencyType: "CRYPTO",
                feild2: "V2",
                feild3: "",
                detail: "CVX + ETH"
            },
            BaseVAPY: 6.12,
            RewardstAPR: {
                from: 7.38,
                to: 10.21,
            },
            Volume: 16.5,
            TVL: 229,
            Fee: 0.030
        },
        {
            Pool: {
                icon: "https://img.icons8.com/cotton/64/000000/nft-collection.png",
                name: "cvxeth",
                currencyType: "CRYPTO",
                feild2: "V2",
                feild3: "",
                detail: "CVX + ETH"
            },
            BaseVAPY: 6.12,
            RewardstAPR: {
                from: 7.38,
                to: 10.21,
            },
            Volume: 16.5,
            TVL: 229,
            Fee: 0.030
        },
        {
            Pool: {
                icon: "https://img.icons8.com/cotton/64/000000/nft-collection.png",
                name: "cvxeth",
                currencyType: "CRYPTO",
                feild2: "V2",
                feild3: "",
                detail: "CVX + ETH"
            },
            BaseVAPY: 6.12,
            RewardstAPR: {
                from: 7.38,
                to: 10.21,
            },
            Volume: 16.5,
            TVL: 229,
            Fee: 0.030
        },
        {
            Pool: {
                icon: "https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-ethereum-coins-cryptocurrency-justicon-lineal-color-justicon.png",
                name: "tricrypto2",
                currencyType: "CRYPTO",
                feild2: "VW",
                feild3: "?",
                detail: "USDT + wBTC"
            },
            BaseVAPY: 0.41,
            RewardstAPR: {
                from: 3.14,
                to: 7.84
            },
            Volume: 28.8,
            TVL: 878.7,
            Fee: 0.030
        },
        {
            Pool: {
                icon: "https://img.icons8.com/external-sbts2018-flat-sbts2018/58/000000/external-bitcoin-cryptocurrency-sbts2018-flat-sbts2018-4.png",
                name: "frax",
                currencyType: "USD",
                feild2: "",
                feild3: "",
                detail: "FRAK + 3Cry"
            },
            BaseVAPY: 0.30,
            RewardstAPR: {
                from: 2.21,
                to: 5.52,
            },
            Volume: 14.7,
            TVL: 182.2,
            Fee: 0.030
        },
        {
            Pool: {
                icon: "https://img.icons8.com/cotton/64/000000/tether--v1.png",
                name: "STG/USDC",
                currencyType: "CRYPTO",
                feild2: "FACTORY",
                feild3: "",
                detail: "STG + USDC"
            },
            BaseVAPY: 9.10,
            RewardstAPR: {
                from: 52.31,
                to: 130.75
            },
            Volume: 38.5,
            TVL: 419.7,
            Fee: 0.030
        },
    ];
    const handleClickRecode = (key:number) => {
        setDetailNum(key)
    }
    const onMoreHandle = () => {
        alert("Welcome");
    }

  // @ts-ignore
    return (
    <ThemeProvider breakpoints={['xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
        <Container className={"mw-100 pv-4"} style={{ minWidth: "525px", marginBottom: "2rem" }}>
            <div className="linearGradient">
                <svg viewBox='0 0 2500 7000' xmlns='http://www.w3.org/2000/svg'>
                    <filter id='noiseFilter'>
                        <feTurbulence
                        type='fractalNoise'
                        baseFrequency='8.64'
                        numOctaves='6'
                        stitchTiles='stitch'/>
                    </filter>
                    <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
                </svg>
            </div>

            <div style={{ marginTop: "2rem", marginBottom: "3rem" }}>
                <Row className={"navBar"}>
                    <Col xxxl={2} xxl={2} lg={2} md={2} style={{ display: "flex", justifyContent: "flex-start", marginBottom: "5px" }}>
                        <span>&nbsp;
                            <img
                                src={initTableData[detailNum].Pool.icon}
                                alt={initTableData[detailNum].Pool.name}
                                width={30}
                                height={30}
                            />
                        </span>
                        <span>&nbsp;
                            <img
                                src={initTableData[detailNum].Pool.icon}
                                alt={initTableData[detailNum].Pool.name}
                                width={30}
                                height={30}
                            />
                        </span>
                        <span>&nbsp;
                            <img
                                src={initTableData[detailNum].Pool.icon}
                                alt={initTableData[detailNum].Pool.name}
                                width={30}
                                height={30}
                            />
                        </span>
                    </Col>
                    <Col style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                        <button>Home</button>
                        <button>Pools</button>
                        <button>Factory</button>
                        <button>DAO</button>
                        <button>Trade</button>
                        <button>Stats</button>
                        <button>Risks</button>
                    </Col>
                    <Col xxl={2} lg={3} md={3} style={{ textAlign: "right", marginBottom: "5px" }}>
                        <button onClick={()=>onMoreHandle()}>
                            Connect wallet
                        </button>
                    </Col>
                </Row>
            </div>

            <div className={"pt-5 CustomTopButtonPos"} style={{ border: "1px solid black", borderLeftColor: "transparent", borderBottomColor: "transparent" }}>
                <div className={"customButtonWrapper"}>
                    <span className={"poolButton"} >
                        Pools
                    </span>
                </div>
                <Row style={{ paddingRight: "1.5rem" }}>
                    <Col xl={3} lg={12}>
                        <InputGroup className={"p-0 m-1 searchShadow"}>
                            <InputGroup.Text id={"search"} className={"p-0 removeBackground"}>
                                <Button onClick={()=>onMoreHandle()} variant={"outline-secondary"} style={{ height: "100%" }} className={"p-0 m-0 border-0"}>
                                    <img
                                        src="https://img.icons8.com/ios/50/000000/search--v1.png"
                                        alt={"search"}
                                        width={25}
                                        height={25}
                                        style={{ margin: "auto 1rem" }}
                                    />
                                </Button>
                            </InputGroup.Text>
                            <Form.Control aria-label={"search"} aria-describedby={"searchGroup"} className={"removeBorder"} />
                        </InputGroup>
                    </Col>
                    <Col xl={6} lg={12}>
                        <Row>
                            <Col><Button variant={"outline-info"} className={"w-100 m-1 bg-custom-btn"} onClick={()=>onMoreHandle()}>All</Button></Col>
                            <Col><Button variant={"outline-secondary"} className={"w-100 m-1 bg-custom-btn"} onClick={()=>onMoreHandle()}>USD</Button></Col>
                            <Col><Button variant={"outline-secondary"} className={"w-100 m-1 bg-custom-btn"} onClick={()=>onMoreHandle()}>BTC</Button></Col>
                            <Col><Button variant={"outline-secondary"} className={"w-100 m-1 bg-custom-btn"} onClick={()=>onMoreHandle()}>ETH</Button></Col>
                            <Col><Button variant={"outline-secondary"} className={"w-100 m-1 bg-custom-btn"} onClick={()=>onMoreHandle()}>Crypto</Button></Col>
                            <Col><Button variant={"outline-secondary"} className={"w-100 m-1 bg-custom-btn"} onClick={()=>onMoreHandle()}>Others</Button></Col>
                            <Col><Button variant={"outline-secondary"} className={"w-100 m-1 bg-custom-btn"} onClick={()=>onMoreHandle()}>My&nbsp;Dashbord</Button></Col>
                        </Row>
                    </Col>
                    <Col xl={3} lg={12} >
                        <Row className={"align-content-end"}>
                            <Col className={"p-0 m-0 child-obj-center"} style={{width: "4rem"}}>
                                <p className="text-end m-0">Risk type</p>
                            </Col>
                            <Col>
                                <Dropdown>
                                    <Dropdown.Toggle variant={"outline-secondary"} className={"w-100 h-100 text-start m-1 bg-custom-btn"} id={"risk"}>All</Dropdown.Toggle>
                                </Dropdown>
                                {/*<Dropdown.Menu>*/}
                                {/*    <Dropdown.Item href={"#/actin-1"}>Rist 1</Dropdown.Item>*/}
                                {/*    <Dropdown.Item href={"#/actin-2"}>Rist 2</Dropdown.Item>*/}
                                {/*    <Dropdown.Item href={"#/actin-3"}>Rist 3</Dropdown.Item>*/}
                                {/*</Dropdown.Menu>*/}
                            </Col>
                            <Col className={"p-0 m-0 child-obj-center"}>
                                <p className="text-end m-0">Platform</p>
                            </Col>
                            <Col>
                                <Dropdown>
                                    <Dropdown.Toggle variant={"outline-secondary"} className={"w-100 h-100 text-start m-1 bg-custom-btn"} id={"risk"}>All</Dropdown.Toggle>
                                </Dropdown>
                                {/*<Dropdown.Menu>*/}
                                {/*    <Dropdown.Item href={"#/actin-1"}>Rist 1</Dropdown.Item>*/}
                                {/*    <Dropdown.Item href={"#/actin-2"}>Rist 2</Dropdown.Item>*/}
                                {/*    <Dropdown.Item href={"#/actin-3"}>Rist 3</Dropdown.Item>*/}
                                {/*</Dropdown.Menu>*/}
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{ margin: "2rem 0 0" }}>
                <Col xl={3} lg={12} className={"leftFixedLayout"} style={{ marginTop: "1rem" }}>
                    <div className={"overlayout overCommon"}>
                        <div className={"overChild overCommon overChildCommon"}>
                            <div className={"overFinalChild overCommon overChildCommon"}>
                                <div className={"overChildWrapper"}>
                                    <div className={"overLaynameWrapper"}>
                                        <span className={"overLayName"}>{initTableData[detailNum].Pool.name}</span>
                                    </div>
                                    <Row style={{ margin: "2rem 1rem" }}>
                                        <Col xs={1}>
                                            <img
                                                src={initTableData[detailNum].Pool.icon}
                                                alt={initTableData[detailNum].Pool.name}
                                                width={30}
                                                height={30}
                                            />
                                        </Col>
                                        <Col className={"text-center custom-detail-title"}>
                                            {initTableData[detailNum].Pool.detail && initTableData[detailNum].Pool.detail}
                                        </Col>
                                        <Col xs={1} className={"text-start"} style={{marginRight:"1rem"}}>
                                            <img
                                                src={initTableData[detailNum].Pool.icon}
                                                alt={initTableData[detailNum].Pool.name}
                                                width={30}
                                                height={30}
                                            />
                                        </Col>
                                    </Row>

                                    <Row style={{ margin: "0 1rem" }}>
                                        <Col>Base vAPY</Col>
                                        <Col className={"text-end h5"}>
                                            {initTableData[detailNum].BaseVAPY+"%"}
                                        </Col>
                                    </Row>

                                    <Row style={{ margin: "0 1rem" }}>
                                        <Col>Rewards tAPR</Col>
                                        <Col className={"text-end h5"}>
                                            <p>{"CRV+" + initTableData[detailNum].RewardstAPR.from + "%"}</p>
                                            <p>{"-> " + initTableData[detailNum].RewardstAPR.to + "%"}</p>
                                        </Col>
                                    </Row>

                                    <Row style={{ margin: "0 1rem" }}>
                                        <Col>Volume</Col>
                                        <Col className={"text-end h5"}>
                                            {"$" + initTableData[detailNum].Volume + "M"}
                                        </Col>
                                    </Row>

                                    <Row style={{ margin: "0 1rem" }}>
                                        <Col>TVL</Col>
                                        <Col className={"text-end h5"}>
                                            {"$" + initTableData[detailNum].TVL + "M"}
                                        </Col>
                                    </Row>

                                    <Row style={{ margin: "0 1rem" }}>
                                        <Col>Fee</Col>
                                        <Col className={"text-end h5"}>
                                            {initTableData[detailNum].Fee+ "%"}
                                        </Col>
                                    </Row>
                                    <Button className={"custom-Special-Button"} onClick={()=>onMoreHandle()}>
                                        <img src="https://img.icons8.com/material/24/000000/resize-diagonal--v1.png" alt={"resize icon"}/>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"followWrapper fixedHeight"}>
                        <div className={"overLaynameWrapper"}>
                            <span className={"overLayName"}>Follow Us</span>
                        </div>
                        <div className={"contentWrapper"}>
                            <Row className={"mb-2"}>
                                <Col>
                                    <a href={"#"} target={"_blank"}>
                                        <img src="https://img.icons8.com/ios/50/000000/twitter--v1.png" alt={"twitter"} width={25} height={25}/>
                                    </a>
                                </Col>
                                <Col>
                                    <a href={"#"} target={"_blank"}>
                                        <img src="https://img.icons8.com/ios/50/000000/discord-logo--v1.png" alt={"discord"} width={25} height={25} />
                                    </a>
                                </Col>
                                <Col>
                                    <a href={"#"} target={"_blank"}>
                                        <img src="https://img.icons8.com/ios/50/000000/instagram-new--v3.png" alt={"instagram"} width={25} height={25} />
                                    </a>
                                </Col>
                                <Col>
                                    <a href={"#"} target={"_blank"}>
                                        <img src="https://img.icons8.com/ios/50/000000/telegram-app.png" alt={"telegram"} width={25} height={25} />
                                    </a>
                                </Col>
                                <Col>
                                    <a href={"#"} target={"_blank"}>
                                        <img src="https://img.icons8.com/ios/50/000000/medium-monogram--v1.png" alt={"mediun"} width={25} height={25} />
                                    </a>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col xl={9} lg={12} className={"border-1"}>
                    <div className={"customBasicTablePos"}>
                        <div className={"customButtonWrapper"}>
                            <button className={"seeAllButton"} onClick={()=>onMoreHandle()} >
                                See All Pools
                            </button>
                        </div>
                        <table className={"table-hover customTable"} style={{ cursor: "pointer" }}>
                            <thead>
                            <tr>
                                <th>Pool</th>
                                <th>Base vAPY</th>
                                <th>Rewards tAPR</th>
                                <th>Volume</th>
                                <th>TVL</th>
                            </tr>
                            </thead>
                            <tbody className={"customTBody"}>
                            {initTableData.map((record, key)=>(
                                <tr key={key} onClick={()=>handleClickRecode(key)}>
                                    <td>
                                        <Row>
                                            <Col xs={3} className={"d-flex align-items-lg-center"}>
                                                <img
                                                    src={record.Pool.icon}
                                                    alt={record.Pool.name}
                                                    width={70}
                                                    height={70}
                                                />
                                            </Col>
                                            <Col>
                                                <div className={"m-0 p-0 child-text-center"}>
                                                    <p>
                                                        {record.Pool.name}
                                                        {record.Pool.currencyType &&
                                                            <span>
                                                                &nbsp;
                                                                <span className={"bg-black text-white"}>
                                                                    { record.Pool.currencyType}
                                                                </span>
                                                            </span>
                                                        }
                                                        {record.Pool.feild2 &&
                                                            <span>
                                                                &nbsp;
                                                                <span className={"bg-black text-white"}>
                                                                    { record.Pool.feild2 }
                                                                </span>
                                                            </span>
                                                        }
                                                        {record.Pool.feild3 &&
                                                            <span>
                                                                &nbsp;
                                                                <span>
                                                                    {"[" + record.Pool.feild3 + "]"}
                                                                </span>
                                                            </span>
                                                        }
                                                    </p>
                                                </div>
                                                <p className={"m-0 p-0"}>
                                                    {record.Pool.detail}
                                                </p>
                                            </Col>
                                        </Row>
                                    </td>
                                    <td>{record.BaseVAPY + "%"}</td>
                                    <td>{"+" + record.RewardstAPR.from + "% -> " + record.RewardstAPR.to+"% CRV"}</td>
                                    <td>{ "$" + record.Volume + "M" }</td>
                                    <td>{ "$" + record.TVL + "M" }</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </Col>
            </Row>
            </div>
        </Container>
    </ThemeProvider>
  );
}

export default App;
