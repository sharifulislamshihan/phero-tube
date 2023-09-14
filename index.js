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

const loadVideos = async(categoryId) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    console.log(categoryId);
    const data = await res.json();
    const cardContainer = document.getElementById('card-container');
    data.data?.forEach((video) => {
        const div = document.createElement('div')
    div.innerHTML = `
            <div class="card bg-base-100">
            <figure><img class="w-96 h-44 rounded-xl" src="${video?.thumbnail}" alt="" /></figure>
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
    console.log(video.authors[0].verified);
    cardContainer.appendChild(div); 

    });
}

// const handleBlueTick = () =>{

// }
// loadVideos();
loadTubeVideosHandler();