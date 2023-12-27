function CommunityInfo({community, houses}){
    const availableHouses = houses ? houses.filter(house => house.communityId === community.id) : [];

    let sum = 0;
    for(let i=0; i<availableHouses.length; i++){
        sum += availableHouses[i]?.price;
    }
    const averagePrice = sum/availableHouses?.length;

    function numberWithCommas(x) {
        x = x.toString();
        let pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    }

    return(
        <div> 
            { averagePrice ? 
                (<div className="community" data-aos="zoom-in" data-aos-duration="1000">
                    <h3>{community.name}</h3>
                    {community.imgUrl ? <img src={community?.imgUrl} alt="neighborhood picture" /> : null}
                    <div>
                        <h2>Average price for a property in this neighborhood is ${averagePrice ? numberWithCommas(averagePrice.toFixed(0)) : "0"} </h2>
                    </div>
                </div>) : null }
        </div>
    )
}
export default CommunityInfo;