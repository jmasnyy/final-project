var config = {
    style: 'mapbox://styles/mapbox/light-v11',
    accessToken: 'pk.eyJ1Ijoiam1hc255eSIsImEiOiJjbTI4M3VxY2oxNGJlMmxwemhlbDE5aGtlIn0.13rAm3kqNCwm7ZLfkTKrMQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Tree Density and Growing Degree Days in King County',
    subtitle: 'Understanding the Impacts of Climate Change',
    byline: 'By Joe Masnyy and Julie Vu',
    footer: 'Source: <a href="https://data-seattlecitygis.opendata.arcgis.com/datasets/d475a7df08e14acd9f97ab6d5c02c61e_0/explore?location=47.588326%2C-121.767799%2C9.50" target="_blank">2020 Census Tracts - Seattle (Seattle City GIS)</a>, <a href="https://data-seattlecitygis.opendata.arcgis.com/datasets/9075e8c912a24c4b9458af8866c72ae7_3/explore?location=47.611817%2C-122.333403%2C11.20" target="_blank">Seattle Hospitals Dataset (Seattle City GIS)</a>. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Introduction: Climate Change and Its Effects on Trees', //Explain impact of climate change here, and define NVDI?
            image: 'images/introTree.webp',
            description: 'As our climate continues to warm, the impacts it has on the health of plants and trees are becoming increasingly significant. Trees are vulnerable to these rising temperatures, especially in urban areas where heat is amplified by human activities. Our project plans to explore and highlight these impacts through NDVI (Normalized Difference Vegetation Index), and comparing how they differ in urban and rural environments.',
            location: {
                center: [-122.48776, 47.29143], // Fed Way coords
                zoom: 7, // Zoom level chosen on Location Helper
                pitch: 0,
                bearing: 0,
                speed: 3
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',  
            onChapterEnter: [
                {
                    layer: 'trees',
                    opacity: 0
                },
                {
                    layer: 'trees-heat',
                    opacity: 0
                },
                {
                    layer: 'degrees-hist',
                    opacity: 0
                },
                {
                    layer: 'degrees-4-2050',
                    opacity: 0
                },
                {   layer: 'degrees-4-2080',
                    opacity: 1
                }
            ],
            onChapterExit: [

                {   layer: 'degrees-4-2080',
                    opacity: 0
                }


            ]            
        },








        //Second Chapter
            // Dot Density of Trees
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Dot Density of Trees',
            image: 'images/density-trees.jpg',
            description: 'This layer displays a dot density map layer that shows the distribution of trees and vegetation within the Federal Way area.',
            location: {
                center: [-122.40613, 47.30948], //Coordinates for Data Location
                zoom: 13.5,
                pitch: 0,              
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 5 // flying speed
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'trees',
                    opacity: 1,
                },
                {
                    layer: 'degrees-hist',
                    opacity:0
                },
                {
                    layer: 'trees-heat',
                    opacity: 0
                },
                {
                    layer: 'trees-4-2080',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'trees',
                    opacity: 0
                }
            ]
        },








        // Third Chapter
            // Heatmap of Trees using NDVI data
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Heatmap of Trees in Federal Way',
            image: 'images/ndviLegend.png',
            description: 'This chapter presents a heatmap layer of trees in Federal Way, based on NDVI (Normalized Difference Vegetation Index) data to portray the health and density of vegetation. <img src="images/ndvi.webp" alt="NDVI Heatmap" />',
   
            location: {
                center: [-122.40613, 47.30948],
                zoom: 13.5,
                pitch: 0,
                bearing: 0.00,
                speed: 5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'trees-heat',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'trees-heat',
                     opacity: 0
                }
            ]
        },
// Fourth Chapter
                // // Polygon of Growing Degree Days Historical
        // {
        //     id: 'fourth-identifier',
        //     alignment: 'left',
        //     hidden: false,
        //     title: 'Growing Degree Days, Historical',
        //     image: 'images/degreesLegend.png',
        //     description: 'Growing degree days is used to measure heat accumulation in plants. It is calculated by subtracting the average daily temperature from a baseline temperature of 50 degree fahrenheit meaning that the larger the number, the more heat has accumulated in plants. As growing degree day figures rise, there is a real potential for harm to existing plants, such as the trees we have looked at.',
        //     location: {
        //         center: [-122.40613, 47.30948],
        //         zoom: 8,
        //         pitch: 0,
        //         bearing: 0.00,
        //         speed: 5
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [
        //         {
        //             layer:'degrees-hist',
        //             opacity: 0.8,
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'degrees-hist',
        //             opacity: 0
        //         }
        //     ]
        // },


// Chapter 5
        //
        {
            id: 'chapter-5',
            alignment: 'left',
            hidden: false,
            title: 'Growing Degree Days, 4.5 Degree Warming in 2050',
            image: 'images/degreesLegend.png',
            description: 'Growing degree days is used to measure heat accumulation in plants. It is calculated by subtracting the average daily temperature from a baseline temperature of 50 degree fahrenheit meaning that the larger the number, the more heat has accumulated in plants. As growing degree day figures rise, there is a real potential for harm to existing plants, such as the trees we have looked at.',
            location: {
                center: [-122.40613, 47.30948],
                zoom: 8,
                pitch: 0,
                bearing: 0.00,
                speed: 5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'degrees-4-2050',
                    opacity: 0.8,
                }
            ],
            onChapterExit: [
                {
                    layer: 'degrees-4-2050',
                    opacity: 0
                }
            ]
        },
// Chapter 6
        // potential 6th chapter showing 4.5 2080 degree days, used to show warming over time, since its hard to compare 4.5 2050 with historical directly
        {
            id: 'chapter-6',
            alignment: 'left',
            hidden: false,
            title: 'Growing Degree Days, 4.5 Degree Warming in 2080',
            image: 'images/degreesLegend.png',
            description: 'As emissions rise and the average global temperature goes up, heat accumulation in plants inevitably goes up. Here we can see that projected heat accumulation between 2070-2099 is higher than that of 2040-2069.',
            location: {
                center: [-122.40613, 47.30948],
                zoom: 8,
                pitch: 0,
                bearing: 0.00,
                speed: 5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'degrees-4-2080',
                    opacity: 0.8,
                }
            ],
            onChapterExit: [
                {
                    layer: 'degrees-4-2080',
                    opacity: 0
                }
            ]
        },




   // This chapter shows both the degrees polygon layer and the trees layer.
        {
            id: 'conclusion',
            alignment: 'left',
            hidden: false,
            title: 'Conclusion: Dot Density of Trees and Growing Degree Days, 4.5 Degree Warming in 2050',
            image: 'images/carbonFootprint.png',
            description: 'With clear evidence that climate change is impacting the growth and health of trees, there is an urgent call to action for government officials and policymakers to implement strategies to protect and sustain tree populations.',
            location: {
                center: [-122.40613, 47.30948], //Federal Way coordinates
                zoom: 13.5,
                pitch: 0,
                bearing: 0,
                speed: 5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'trees',
                    opacity: 1
                },
                {
                    layer:'degrees-4-2050',
                    opacity: 0.3,
                }
            ],
            onChapterExit: [
                {
                    layer: 'trees',
                    opacity: 0
                },
                {
                    layer:'degrees-4-2050',
                    opacity: 0,
                }
            ]
        }
    ]
};























