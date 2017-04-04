import * as vis from "vis";

export const datagram = {
    nodes: {
        "0": {
            topology_id: "sample",
            id: "0",
            res_id: "res1",
            label: 'alpha-1',
            shape: "circularImage",
            image: './img/user.png',
            size: 20,
            x: -450,
            y: 0
        },
        "1": {
            topology_id: "sample",
            id: "1",
            res_id: "res2",
            label: 'bravo-2',
            shape: "circularImage",
            image: './img/user.png',
            size: 20,
            x: -450,
            y: 100
        },
        "2": {
            topology_id: "sample",
            id: "2",
            res_id: "res3",
            label: 'charlie-3',
            shape: "circularImage",
            image: './img/user.png',
            size: 20,
            x: -450,
            y: 200
        },
        "3": {
            topology_id: "sample",
            id: "3",
            res_id: "res1",
            label: 'delta-4',
            shape: "circularImage",
            image: './img/api.png',
            size: 20,
            x: -150,
            y: -220
        },
        "4": {
            topology_id: "sample",
            id: "4",
            res_id: "res1",
            label: 'echo-5',
            shape: "circularImage",
            image: './img/api.png',
            size: 20,
            x: -150,
            y: -50
        },
        "5": {
            topology_id: "sample",
            id: "5",
            res_id: "res5",
            label: 'foxtrot-6',
            shape: "circularImage",
            image: './img/api.png',
            size: 20,
            x: -150,
            y: 150
        },
        "6": {
            topology_id: "sample",
            id: "6",
            res_id: "res6",
            label: 'golf-7',
            shape: "circularImage",
            image: './img/download.png',
            size: 20,
            x: 150,
            y: 20
        },
        "7": {
            topology_id: "sample",
            id: "7",
            res_id: "res4",
            label: 'hotel-8',
            shape: "circularImage",
            image: './img/download.png',
            size: 20,
            x: 150,
            y: 150
        },
        "8": {
            topology_id: "sample",
            id: "8",
            res_id: "res4",
            label: 'india-9',
            shape: "circularImage",
            image: './img/disk.png',
            size: 20,
            x: 450,
            y: 0
        },
        "9": {
            topology_id: "sample",
            id: "9",
            res_id: "res5",
            label: 'juliett-10',
            shape: "circularImage",
            image: './img/disk.png',
            size: 20,
            x: 450,
            y: 250
        }
    },
    edges: {
        "e0": {
            topology_id: "sample",
            id: "e0",
            from: "0",
            to: "3"
        }, "e1": {
            topology_id: "sample",
            id: "e1",
            from: "0",
            to: "4"
        }, "e2": {
            topology_id: "sample",
            id: "e2",
            from: "1",
            to: "4"
        }, "e3": {
            topology_id: "sample",
            id: "e3",
            from: "1",
            to: "5"
        }, "e4": {
            topology_id: "sample",
            id: "e4",
            from: "2",
            to: "5"
        }, "e5": {
            topology_id: "sample",
            id: "e5",
            from: "2",
            to: "9"
        }, "e6": {
            topology_id: "sample",
            id: "e6",
            from: "3",
            to: "8"
        }, "e7": {
            topology_id: "sample",
            id: "e7",
            from: "4",
            to: "6"
        }, "e8": {
            topology_id: "sample",
            id: "e8",
            from: "4",
            to: "7"
        }, "e9": {
            topology_id: "sample",
            id: "e9",
            from: "6",
            to: "8"
        }, "e10": {
            topology_id: "sample",
            id: "e10",
            from: "6",
            to: "9"
        }
    }
}
