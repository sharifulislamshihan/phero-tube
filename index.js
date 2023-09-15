const loadTubeVideosHandler = async() =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`)
    const data = await res.json();
    const tabContainer = document.getElementById('tab-container');
    data.data.forEach((category) => {
        // console.log(category.category);
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick= "loadVideos('${category?.category_id}')" class="tab rounded-lg bg-slate-300 text-xl text-black ">${category?.category}</a> 
        `
        // Appneding in tab

        tabContainer.appendChild(div);

    });
    // console.log(data.data);
    // console.log(data.data[1].category);
}
// sorting
const loadSortByView = async() =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`);
    const data = await res.json();
    const cardContainer1 = document.getElementById('card-container1');
    sortByView = data.data;
    sortByView?.forEach((data) => {
        //console.log(data.data[0].others.views);
        sortByView?.sort((ob1, ob2) => parseFloat(ob2?.others?.views) - parseFloat(ob1?.others?.views));
        console.log(data);
        const div = document.createElement('div')
        div.innerHTML = `
                <div class="card bg-base-100">
                <figure><img class="w-96 h-44 rounded-xl" src="${data?.thumbnail}" alt="" /></figure>
                <div class=" relative bottom-10 right-3 flex justify-end ml-40 bg-slate-800 text-white text-sm">
                <h3 class="p-1 pr-3"><span>3</span>hrs <span>54</span> min ago</h3>
                </div>
                <div class="card-body -ml-8">
                    <div class="flex gap-5">
                        <img class="w-11 h-11 rounded-full" 
                        src="${data?.authors[0]?.profile_picture}" alt="">
                        <h2 class="text-lg font-bold"> ${data?.title}
                        </h2>
                    </div>
    
                    <!-- Name -->
                    <div class="ml-16 -mt-3">
                        <h2 class="card-title text-[#111111B3] text-sm">
                            ${data?.authors[0]?.profile_name}
                            <div class="bedge">
                                <img class="hidden" src="blueTick.png" alt="">
                            </div>
                        </h2>
                    </div>
                    <h2 class="text-[#111111B3] ml-16 text-sm"><span>${data?.others?.views}</span> views</h2>
                </div>
            </div>
        `
        
    
        cardContainer1.appendChild(div); 
    });
}

const loadVideos = async(categoryId) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    //console.log(categoryId);
    const data = await res.json();
    const cardContainer1 = document.getElementById('card-container1');
    const cardContainer2 = document.getElementById('card-container2');
    cardContainer1.innerHTML = "";
    cardContainer2.innerHTML = "";
    const len = data.data.length;
    //console.log(len);
    if(len >= 1){
        cardContainer1.classList.remove('hidden');
        cardContainer2.classList.add('hidden');
        data.data?.forEach((video) => {
            //const time = video?.others?.posted_date
            // if(time <3600){
            //     const min = parseInt(time/60);
            // }
            // else{
            //     const hour = parseInt(time/3600);
            //     const leftTime = time - (hour*3600);
            //     const min = parseInt(leftTime/60);
            // }
            //console.log(time);
            const div = document.createElement('div')
        div.innerHTML = `
                <div class="card bg-base-100">
                <figure><img class="w-96 h-44 rounded-xl" src="${video?.thumbnail}" alt="" /></figure>
                <div class=" relative bottom-10 right-3 flex justify-end ml-40 bg-slate-800 text-white text-sm">
                <h3 class="p-1 pr-3"><span>3</span>hrs <span>54</span> min ago</h3>
                </div>
                <div class="card-body -ml-8">
                    <div class="flex gap-5">
                        <img class="w-11 h-11 rounded-full" 
                        src="${video?.authors[0]?.profile_picture}" alt="">
                        <h2 class="text-lg font-bold"> ${video?.title}
                        </h2>
                    </div>
    
                    <!-- Name -->
                    <div class="ml-16 -mt-3">
                        <h2 class="card-title text-[#111111B3] text-sm">
                            ${video?.authors[0]?.profile_name}
                            <div class="bedge">
                                <img class="hidden" src="blueTick.png" alt="">
                            </div>
                        </h2>
                    </div>
                    <h2 class="text-[#111111B3] ml-16 text-sm"><span>${video?.others?.views}</span> views</h2>
                </div>
            </div>
        `
        
    
        cardContainer1.appendChild(div); 

        });
    }
    else{
        cardContainer2.classList.remove('hidden');
        cardContainer1.classList.add('hidden');
        const div = document.createElement('div')
        div.innerHTML = `
                <div class = "mx-auto my-20">
                <figure><img src="Icon.png" alt="" /></figure>
                <h2 class = "text-2xl my-9">Oops!! Sorry, There is no <br> content here</h2>
                </div>
        `
        cardContainer2.appendChild(div); 
    }
}
// const sortedByView = () =>{

// }
// }
// loadVideos();
loadTubeVideosHandler();
