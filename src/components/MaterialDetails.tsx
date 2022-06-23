import React, { useEffect, useState } from 'react'
import axios from 'axios';

const MaterialDetails: React.FC = () => {
    // const [details, setDetails] = useState([]);
    // const sessionId = localStorage.getItem("sessionId");
    const [sess, setSess] = useState({});

    useEffect(() => {
        // let params = {};
        let data = {
            'params': {
                'login': 'admin',
                'password': 'admin',
                'db': 'prometheus02'
            }
        }
        axios({
            method: "post", //you can set what request you want to be
            url: "https://prometheus.verts.co.in/web/session/authenticate",
            data: data,
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
        }).then((res) => {
            console.log(res, "response from authenticate");
            setSess(res);
        });
    }, []);

    useEffect(() => {
        if (sess !== "") {
            console.log(sess, "session");
            let params = {};
            // let parameter = {
            //     "db": "prometheus02",
            //     "login": "admin",
            //     "password": "admin",
            // }

            axios({
                method: "post", //you can set what request you want to be
                url: "https://prometheus.verts.co.in/get_mr_list",
                data: JSON.stringify(
                    {
                        jsonrpc: "2.0",
                        method: "call",
                        params: params,
                    }
                ),
                headers: {
                    Authorization: `Bearer ${sess}`,
                    Accept: "application/json",
                    "Content-type": "application/json",
                },
                // cookies: `${sess}`
            }).then((res) => {
                console.log(res, "response from get session info");
            });
        }
    }, [sess]);
    return (
        <>

            <p>Hello World!</p>
        </>
    )
}

export default MaterialDetails;