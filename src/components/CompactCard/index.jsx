function CompactCard({title, imgUrl}) {
    return (
        <div>
            <div>
                <img src={imgUrl || "/public/imagem-card-default.png"} alt="imagem musica card" />
            </div>
            <div>
                <p>{title}</p>
            </div>
        </div>
    );
}

export default CompactCard;