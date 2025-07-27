function Stats({charCount}) {
    return (
        <section className="stats">
           <Stat number={charCount} label={"Character"}/>
           <Stat number={0} label={"Words"}/>
           <Stat number={280} label={"Twitter"}/>
           <Stat number={2200} label={"Facebook"}/>
        </section>
    )
}
export default Stats;

function Stat({number, label}){
    return (
        <section className="stat">
            <span className="stat__number">{number}
            </span>
            <h2 className="second-heading">{label}
            </h2>
        </section>
        )
}