import React from 'react';

export default class Hard extends React.Component {
    constructor() {
        super()
        this.state = {
            bot: 0,
            highest: 101,
            lowest: 0,
            comment: "",
            rounds:0

        };
    }

    iniGuess = e => {
        let randomN = Math.floor(Math.random() * 100);
        this.setState({ bot: randomN });
        this.setState({ highest: 101});
        this.setState({ lowest: 0 });
        this.setState({ comment:"" });
        this.setState({ rounds:0});
    }

    lower = e => {
        if (this.state.bot === this.state.lowest + 1) {
            this.setState({ comment: "This is either correct or you're messing with me, please click 'restart'" })
        } else {
            this.setState({ highest: this.state.bot })
            let randomN = 0
            while ((randomN <= this.state.lowest || randomN >= this.state.bot))
                randomN = Math.round(Math.random() * (+this.state.highest - +this.state.lowest + 1)) + +this.state.lowest;
            this.setState({ bot: randomN })
            this.setState({rounds: this.state.rounds + 1});
        }
    }
    higher = e => {
        if (this.state.bot === this.state.highest - 1) {
            this.setState({ comment: "This is either correct or you're messing with me, please click 'restart'" })
        } else {
            this.setState({ lowest: this.state.bot })
            let randomN = 0
            while (randomN <= this.state.bot || randomN >= this.state.highest)
                randomN = Math.round(Math.random() * (+this.state.highest - +this.state.lowest + 1)) + +this.state.lowest;
            this.setState({ bot: randomN })
            this.setState({rounds: this.state.rounds + 1});
        }

    }
    correct = e => {
        this.setState({comment:`I got it right in ${this.state.rounds} turns`})

    }

    render() {
        return (
            <>
                <div className="problemNumber">Challenge 1 Hard</div>
                <div className="problemSpecs">Reverse number guessing game, bot gives a number between 1-100, respond if its higher or lower, repeat till correct</div>
                <div className="answer">
                    <button className="start" onClick={this.iniGuess}>Start</button>

                    <label>I have guessed {this.state.bot}. Is it higher, lower or correct?</label><br />
                    <button className="higher" onClick={this.higher}>Higher</button>
                    <button className="lower" onClick={this.lower}>Lower</button>
                    <button className="lower" onClick={this.correct}>Correct</button><br />
                    {this.state.comment}

                </div>
            </>
        )
    }
}

