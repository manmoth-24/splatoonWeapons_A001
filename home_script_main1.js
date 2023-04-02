const makeImgUrl = (name) =>{
    return `./imgs/${name}.png`;
}
const docUrlImg = (img,name,url) =>{
    return `<a href="${url}" target="_blank"><div class="nameImg">
            <img src="${makeImgUrl(img)}">
            <p>${name}</p>
            </div></a>`
}
const makeUrl = (backSite,link,type) =>{
    let someP;
    let onLink;
    if(type === "html"){
        onLink = 'htmlFiles/';
    }
    if(backSite !== 0){
        someP = ".";
    }
    for(let i = 0;i < backSite - 1;i ++){
        someP = someP + "."
    }
    console.log(someP);
    return `${someP}/${onLink}${link}.${type}`
}
const weaponNameImgs = 
[
    {name: "スプラシューター", inImg: true, link: "weapons/a01", makeLink: true},
    {name: "スプラチャージャー", inImg: true, link: "weapons/a02", makeLink: true},
    {name: "スプラローラー", inImg: true, link: "weapons/a03", makeLink: true},
    {name: "バケットスロッシャー", inImg: true, link: "weapons/a04", makeLink: true},
    {name: "バレルスピナー", inImg: true, link: "weapons/a05", makeLink: true},
    {name: "スプラマニューバー", inImg: true, link: "weapons/a06", makeLink: true},
    {name: "パラシェルター", inImg: true, link: "weapons/a07", makeLink: true},
    {name: "ホットブラスター", inImg: true, link: "weapons/a08", makeLink: true},
    {name: "ホクサイ", inImg: true,link: "weapons/a09", makeLink: true},
    {name: "LACT-450", inImg: true,link: "weapons/a10", makeLink: true},
    {name: "ドライブワイパー", inImg: true, link: "weapons/a11", makeLink: true}
];

weaponNameImgs.forEach((weapon) =>{
    let weaponUrl;
    if(weapon.makeLink){
        weaponUrl = makeUrl(1,weapon.link,'html');
    }
    if(weapon.inImg){
        document.writeln(
            docUrlImg(weapon.name,weapon.name,weaponUrl)
        );
    }else{
        document.writeln(
            docUrlImg(weapon.img,weapon.name,weaponUrl)
        );
    }
});