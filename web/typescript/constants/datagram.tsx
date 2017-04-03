import * as vis from "vis";

export const datagram = {
    nodes: {
        "0": {
            topology_id: "sample",
            id: "0",
            label: 'alpha-1',
            shape: 'circularImage',
            image: './img/user.png',
            size: 20,
            x: -450,
            y: 0
        },
        "1": {
            topology_id: "sample",
            id: "1",
            label: 'bravo-2',
            shape: 'circularImage',
            image: './img/user.png',
            size: 20,
            x: -450,
            y: 100
        },
    },
    edges: {
        "e1": {
            topology_id: "sample",
            id: "e1",
            from: "0",
            to: "1"
        }
    }
}

/*
export const datagram = {
    nodes: [{
        topology_id: "sample",
        id: "0",
        label: 'alpha-1',
        image: './img/user.png',
        size: 20,
        x: -450,
        y: 0
    }, {
        topology_id: "sample",
        id: "1",
        label: 'bravo-2',
        image: './img/user.png',
        size: 20,
        x: -450,
        y: 100
    }, {
        topology_id: "sample",
        id: "2",
        label: 'charlie-3',
        image: './img/user.png',
        size: 20,
        x: -450,
        y: 200
    }, {
        topology_id: "sample",
        id: "3",
        label: 'delta-4',
        image: './img/api.png',
        size: 20,
        x: -150,
        y: -220
    }, {
        topology_id: "sample",
        id: "4",
        label: 'echo-5',
        image: './img/api.png',
        size: 20,
        x: -150,
        y: -50
    }, {
        topology_id: "sample",
        id: "5",
        label: 'foxtrot-6',
        image: './img/api.png',
        size: 20,
        x: -150,
        y: 150
    }, {
        topology_id: "sample",
        id: "6",
        label: 'golf-7',
        image: './img/download.png',
        size: 20,
        x: 150,
        y: 20
    }, {
        topology_id: "sample",
        id: "7",
        label: 'hotel-8',
        image: './img/download.png',
        size: 20,
        x: 150,
        y: 150
    }, {
        topology_id: "sample",
        id: "8",
        label: 'india-9',
        image: './img/disk.png',
        size: 20,
        x: 450,
        y: 0
    }, {
        topology_id: "sample",
        id: "9",
        label: 'juliett-10',
        image: './img/disk.png',
        size: 20,
        x: 450,
        y: 250
    }],
    edges: [{
        topology_id: "sample",
        id: "e0",
        from: "0",
        to: "3"
    }, {
        topology_id: "sample",
        id: "e1",
        from: "0",
        to: "4"
    }, {
        topology_id: "sample",
        id: "e2",
        from: "1",
        to: "4"
    }, {
        topology_id: "sample",
        id: "e3",
        from: "1",
        to: "5"
    }, {
        topology_id: "sample",
        id: "e4",
        from: "2",
        to: "5"
    }, {
        topology_id: "sample",
        id: "e5",
        from: "2",
        to: "9"
    }, {
        topology_id: "sample",
        id: "e6",
        from: "3",
        to: "8"
    }, {
        topology_id: "sample",
        id: "e7",
        from: "4",
        to: "6"
    }, {
        topology_id: "sample",
        id: "e8",
        from: "4",
        to: "7"
    }, {
        topology_id: "sample",
        id: "e9",
        from: "6",
        to: "8"
    }, {
        topology_id: "sample",
        id: "e10",
        from: "6",
        to: "9"
    }]
}
*/
