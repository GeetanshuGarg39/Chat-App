
const ChatHistory = [
    {
        type: "msg",
        message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, enim distinctio sequi vel ipsam obcaecati voluptas nemo atque eaque architecto!",
        incoming: true,
        outgoing: false,
    },
    {
        type: "divider",
        text: "Today",
    },
    {
        type: "msg",
        message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, enim distinctio sequi vel ipsam obcaecati voluptas nemo atque eaque architecto!",
        incoming: false,
        outgoing: true,
    },
    {
        type: "msg",
        message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, enim distinctio sequi vel ipsam obcaecati voluptas nemo atque eaque architecto!",
        incoming: false,
        outgoing: true,
    },
    {
        type: "msg",
        message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, enim distinctio sequi vel ipsam obcaecati voluptas nemo atque eaque architecto!",
        incoming: true,
        outgoing: false,
    },

    {
        type: "msg",
        subtype: "img",
        message: "This is img message!",
        img: "https://images.unsplash.com/photo-1455218873509-8097305ee378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        incoming: true,
        outgoing: false,
    },
    {
        type: "msg",
        subtype: "doc",
        message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, enim distinctio sequi vel ipsam obcaecati voluptas nemo atque eaque architecto!",
        incoming: false,
        outgoing: true,
    },
    {
        type: "msg",
        message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, enim distinctio sequi vel ipsam obcaecati voluptas nemo atque eaque architecto!",
        incoming: false,
        outgoing: true,
    },
    {
        type: "msg",
        subtype: "img",
        message: "This is img message!",
        img: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        incoming: false,
        outgoing: true,
    },

    {
        type: "msg",
        subtype: "doc",
        message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, enim distinctio sequi vel ipsam obcaecati voluptas nemo atque eaque architecto!",
        incoming: true,
        outgoing: false,
    },

    {
        type: "msg",
        subtype: "reply",
        reply: "This is a reply",
        message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, enim distinctio sequi vel ipsam obcaecati voluptas nemo atque eaque architecto!",
        incoming: false,
        outgoing: true,
    },
    {
        type: "msg",
        subtype: "reply",
        reply: "This is a reply",
        message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, enim distinctio sequi vel ipsam obcaecati voluptas nemo atque eaque architecto!",
        incoming: true,
        outgoing: false,
    },
];

const CallList = [
    {
        id: 0,
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        name: "Addisyn Buck",
        online: true,
        incoming: true,
        missed: false,
        type: false,
    },
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        name: "Franco Guzman",        
        online: true,
        incoming: false,
        missed: true,
        type: true,
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        name: "Adelina Sutton",
        online: false,
        incoming: true,
        missed: true,
        type: true,
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Ari Gonzalez",
        online: false,
        incoming: false,
        missed: false,
        type: false,
    },
    {        
        id: 4,
        img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        name: "Maxton Castillo",
        online: true,
        incoming: true,
        missed: false,
        type: false,
    },
    {
        id: 5,
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Max Peterson",
        online: false,
        incoming: false,
        missed: false,
        type: false,
    },
    {
        id: 6,
        img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Forrest Grant",
        online: true,
        incoming: true,
        missed: false,
        type: true,
    },
    {
        id: 7,
        img: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Bailey Reese",
        online: false,
        incoming: false,
        missed: false,
        type: true,
    },
    {
        id: 8,
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        name: "Addisyn Buck",
        online: true,
        incoming: true,
        missed: false,
        type: true,
    },
    {
        id: 9,
        img: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Bailey Reese",
        online: false,
        incoming: false,
        missed: false,
        type: false,
    },
    {
        id: 10,
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Max Peterson",
        online: true,
        incoming: true,
        missed: false,
        type: false,
    },    
];

const MembersList = [
    {
        id: 0,
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        name: "Addisyn Buck",
        online: true,        
    },
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        name: "Franco Guzman",        
        online: true,        
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        name: "Adelina Sutton",
        online: false,        
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Ari Gonzalez",
        online: false,       
    },
    {        
        id: 4,
        img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        name: "Maxton Castillo",
        online: true,        
    },
    {
        id: 5,
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Max Peterson",
        online: false,
    },
    {
        id: 6,
        img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Forrest Grant",
        online: true,
    },
    {
        id: 7,
        img: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Bailey Reese",
        online: false,
    },
    {
        id: 8,
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        name: "Addisyn Buck",
        online: true,
    },
    {
        id: 9,
        img: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Bailey Reese",
        online: false,
    },
    {
        id: 10,
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Max Peterson",
        online: true,
    },    
];

const ChatList = [
    {
        id: 0,
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        name: "Addisyn Buck",
        msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, impedit.",
        time: "9:36",
        unread: 0,
        pinned: true,
        online: true,
    },
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        name: "Franco Guzman",
        msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, impedit.",
        time: "12:02",
        unread: 2,
        pinned: true,
        online: false,
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        name: "Adelina Sutton",
        msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, impedit.",
        time: "10:35",
        unread: 3,
        pinned: false,
        online: true,
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Ari Gonzalez",
        msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, impedit.",
        time: "04:00",
        unread: 0,
        pinned: false,
        online: true,
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        name: "Maxton Castillo",
        msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, impedit.",
        time: "08:42",
        unread: 0,
        pinned: false,
        online: false,
    },
    {
        id: 5,
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Max Peterson",
        msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, impedit.",
        time: "08:42",
        unread: 0,
        pinned: false,
        online: false,
    },
    {
        id: 6,
        img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Forrest Grant",
        msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, impedit.",
        time: "08:42",
        unread: 0,
        pinned: false,
        online: false,
    },
    {
        id: 7,
        img: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Bailey Reese",
        msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, impedit.",
        time: "08:42",
        unread: 0,
        pinned: false,
        online: false,
    },
];

const MsgMenuOptions = [
    {
        title: "Reply",
    },
    {
        title: "Forward message",
    },
    {
        title: "Report",
    },
    {
        title: "Delete Message",
    },
];

const SharedDocs = [
    {
        type: "msg",
        subtype: "doc",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quasi?",
        incoming: true,
        outgoing: false,
    },
    {
        type: "msg",
        subtype: "doc",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quasi?",
        incoming: true,
        outgoing: false,
    },
    {
        type: "msg",
        subtype: "doc",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quasi?",
        incoming: true,
        outgoing: false,
    },
    {
        type: "msg",
        subtype: "doc",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quasi?",
        incoming: true,
        outgoing: false,
    },
    {
        type: "msg",
        subtype: "doc",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quasi?",
        incoming: true,
        outgoing: false,
    },
    {
        type: "msg",
        subtype: "doc",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quasi?",
        incoming: true,
        outgoing: false,
    },
    {
        type: "msg",
        subtype: "doc",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quasi?",
        incoming: true,
        outgoing: false,
    },
    {
        type: "msg",
        subtype: "doc",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quasi?",
        incoming: true,
        outgoing: false,
    },
];

const SharedLinks = [
    {
        type: "msg",
        subtype: "link",
        preview: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quasi?",
        incoming: true,
        outgoing: false,
    },
    {
        type: "msg",
        subtype: "link",
        preview: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quasi?",
        incoming: true,
        outgoing: false,
    },
    {
        type: "msg",
        subtype: "link",
        preview: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quasi?",
        incoming: true,
        outgoing: false,
    },
    {
        type: "msg",
        subtype: "link",
        preview: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quasi?",
        incoming: true,
        outgoing: false,
    },
    {
        type: "msg",
        subtype: "link",
        preview: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quasi?",
        incoming: true,
        outgoing: false,
    },
    {
        type: "msg",
        subtype: "link",
        preview: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quasi?",
        incoming: true,
        outgoing: false,
    },
];





export { ChatList, ChatHistory, MsgMenuOptions, SharedDocs, SharedLinks, CallList, MembersList };