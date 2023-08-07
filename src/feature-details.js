
const features = [
    {
        id: 1,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path fill="#746ae9" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5l-9-4Z"/></svg>,
        name: "DURABILITY",
        sentence: "Built to last with sturdy construction and high-quality materials."
    },

    {
        id: 2,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><path fill="#746ae9" d="M32 5C15.431 5 2 18.469 2 35.086c0 8.547 3.562 16.256 9.267 21.734c0 0 4.067 1.049 5.429.415c1.532 1.132 3.01 1.765 4.3 1.765h.001c.606 0 1.157-.138 1.64-.408c.914-.515 1.689-1.013 1.923-1.91c.042-.162.062-.324.065-.491c.427-.073.898-.3 1.49-.633c3.072-1.729 4.257-3.304-2.375-15.165c-6.632-11.859-8.59-11.666-11.664-9.938c-.589.331-1.015.62-1.3.945a1.93 1.93 0 0 0-1.043-.285c-.624 0-1.224.269-2.051.733c-1.13.635-1.789 1.947-1.953 3.77c-.011-.177-.025-.353-.025-.532a26.317 26.317 0 0 1 7.25-18.173c.657.363 1.362.637 1.905.534c3.468-.656 7.998-5.639 17.141-5.639c9.145 0 13.673 4.982 17.141 5.639c.544.103 1.25-.17 1.906-.534a26.314 26.314 0 0 1 7.251 18.173c0 .182-.015.357-.025.535c-.163-1.823-.823-3.137-1.953-3.772c-.827-.465-1.427-.733-2.052-.733a1.93 1.93 0 0 0-1.043.285c-.285-.325-.711-.614-1.301-.945c-3.074-1.729-5.032-1.922-11.664 9.938c-6.632 11.861-5.447 13.436-2.373 15.165c.591.332 1.063.559 1.488.633c.004.167.024.329.066.491c.233.897 1.008 1.396 1.922 1.91a3.325 3.325 0 0 0 1.641.407c1.291 0 2.77-.633 4.302-1.764c1.362.633 5.428-.416 5.428-.416C58.44 51.342 62 43.633 62 35.086C62 18.469 48.569 5 32 5M8.6 33.488c.264-.147.878-.493 1.134-.493c.39 0 1.345 1.869 2.452 4.033a212.71 212.71 0 0 0 4.039 7.593a210.906 210.906 0 0 0 4.352 7.41c1.274 2.093 2.281 3.745 2.169 4.176c-.034.129-.379.381-1.025.744a1.467 1.467 0 0 1-.723.168h-.001c-.937 0-2.202-.584-3.612-1.713c.392-4.836-5.042-8.532-8.632-13.021c-.572-1.6-.953-3.121-1.113-4.49c-.262-2.238.107-3.926.96-4.407m47.762 4.407c-.16 1.369-.542 2.893-1.113 4.492c-3.591 4.488-9.023 8.186-8.633 13.02c-1.41 1.129-2.676 1.713-3.612 1.713c-.282 0-.524-.057-.724-.168c-.646-.363-.991-.614-1.025-.744c-.111-.43.895-2.08 2.168-4.171a212.126 212.126 0 0 0 4.354-7.415c1.833-3.277 3.106-5.77 4.036-7.588c1.107-2.167 2.063-4.038 2.454-4.038c.257 0 .871.346 1.134.493c.854.48 1.222 2.167.961 4.406"/></svg>,
        name: "High Quality Sound",
        sentence: "With crystal-clear and high-fidelity audio for an immersive, dynamic experience."
    },

    {
        id: 3,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 48 48"><mask id="ipTHeadphoneSound0"><g fill="none"><path fill="#555" d="M4 28a2 2 0 0 1 2-2h4v12H6a2 2 0 0 1-2-2v-8Zm34-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4V26Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 36V24c0-7.732 6.268-14 14-14s14 6.268 14 14v12M10 26H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4V26Zm28 0h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4V26Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 32h4l2-6l4 12l2-6h4"/></g></mask><path fill="#746ae9" d="M0 0h48v48H0z" mask="url(#ipTHeadphoneSound0)"/></svg>,
        name: "Noise isolation",
        sentence: "Blocks out external noise, giving you a distraction-free listening experience."
    },

    {
        id: 4,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 256 256"><path fill="#746ae9" d="M234 80.12A24 24 0 0 0 216 72h-56V56a40 40 0 0 0-40-40a8 8 0 0 0-7.16 4.42L75.06 96H32a16 16 0 0 0-16 16v88a16 16 0 0 0 16 16h172a24 24 0 0 0 23.82-21l12-96A24 24 0 0 0 234 80.12ZM32 112h40v88H32Z"/></svg>,
        name: "Comfortable fit",
        sentence: "Designed to fit snugly over your ears for extended use without fatigue."
    },
    
    

]

export default features
