document.addEventListener('DOMContentLoaded', function () {
    // 初始化地图，设置初始位置和缩放比例
    const map = L.map('map').setView([20, 0], 2);

    // 加载 OpenStreetMap 瓦片图层
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
    }).addTo(map);

    // 示例的学术访问次数数据（按国家）
    const academicVisits = {
        "China": 35,
        "United States": 50,
        "Germany": 15,
        "France": 10,
        "Japan": 8,
        "Australia": 12,
        // 可以继续添加其他国家和访问次数
    };

    // 加载 GeoJSON 世界地图数据
    fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
        .then(response => response.json())
        .then(geoData => {
            // 使用 GeoJSON 图层加载数据到地图中
            L.geoJson(geoData, {
                style: function () {
                    return { color: "#4CAF50", weight: 1 };
                },
                onEachFeature: function (feature, layer) {
                    const countryName = feature.properties.name;
                    const visits = academicVisits[countryName] || 0; // 获取该国家的访问次数

                    // 添加鼠标悬浮事件，显示访问次数
                    layer.on('mouseover', function () {
                        layer.bindPopup(`${countryName}: ${visits} 次访问`).openPopup();
                    });
                }
            }).addTo(map);
        });
});
