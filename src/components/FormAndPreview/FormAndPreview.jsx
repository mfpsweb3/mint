import React, { Component } from "react";
import CryptoBoyNFTImage from "../CryptoBoyNFTImage/CryptoBoyNFTImage";
import queryString from 'query-string'
import { HashRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';



import db  from "../../database";

class FormAndPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoPunkIndex: "",
      cryptoBunkImageURL: "/images/punks/punk-0001x8.png",
      cryptoBoyPrice: "",
      maxForThisRun: 0,
      addressTo: "",
      gasScore: "",
      gasScoreLot: "",
      gasScoreHome: "",
      gasTotal: "",
      homeStyle: "",
    };
  }


  Load_New_URL= async (e)=>{
    var newUrl  = e.target.value;
    if(newUrl == "Undeveloped"){
      window.alert('Virtual Reality Undeveloped');
    }else{
      const newWindow = window.open(newUrl, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
  }

  Load_New_URLOpensea= async (e)=>{
    var newUrl  = e.target.value;
    if(newUrl == "Unassigned"){
      window.alert('Home Owner Unassigned');
    }else{
      const newWindow = window.open('https://opensea.io/' + newUrl, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
  }
  Load_New_URLOSM= async (e)=>{
    var newUrl  = e.target.value;
    if(newUrl == "Unassigned"){
      window.alert('Home Owner Unassigned');
    }else{
      const newWindow = window.open(newUrl, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
  }
  Load_New_Image= async (e)=>{
      this.state.punkid =e.target.value;
      if (e.target.value ==undefined) {
        this.state.punkid =e.target.id;
      }
      window.alert('Home Owner Unassigned' + this.state.punkid);
    }

  componentDidMount = async () => {

    window.scrollTo(0, 0);
    console.log(this.props);
    let punkid = new URLSearchParams(this.props.location.search).get( "punkid" );
    if(punkid === '' || punkid === null || punkid === undefined)punkid = "1";
    this.setState({ punkid });

  };

  callClaimPunkFromApp = (e) => {
    e.preventDefault();
      this.props.claimPunk(
        this.state.punkid
      );
  };





  render() {

    //const elements = this.props.cryptoBoys;

    const items = []
    const itemsHomes = []
    const itemsBottomHomes = []
    const itemsBottom = []


    return (
      <div>

        <div class="container">
        <div class="card col-md-12 text-center" >
                    <div class="card-body">
    <h6 class="card-subtitle mb-2">Mint Amount (Max 20 per Wallet)</h6>
    <div>
      <input
        required
        type="number"
        name="punkid"
        id="punkid"
        value="20"
        className="form-control"
        placeholder="Enter Home NO"
        onChange={(e) =>
          this.Load_New_Image(e)
        }
      />
    </div>


        <form onSubmit={this.callClaimPunkFromApp} className="pt-4 mt-1">
          <div className="row">
          <div className="col-md-12">
            Mint Price 0.011111 ETH
            <div>
              <button
                id="mintBtn22"
                style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
                type="submit"
                className="btn mt-4 btn-block btn-outline-primary"
              >
                Mint
              </button>
              </div>
            </div>
          </div>
        </form>
                    </div>
        </div>
        </div>

          <hr className="my-4" />
              mfpsweb3 &copy; 2021 All rights reserved.
          <hr className="my-4" />
      </div>
    );
  }
}

export default FormAndPreview;
