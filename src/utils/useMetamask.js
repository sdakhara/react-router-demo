import {useState} from 'react'
import {ethers} from 'ethers'
export default function useMetamask() {
    const [isConnected, setIsConnected] = useState(false)
    const [address, setAddress] = useState(null)
    const [provider, setProvider] = useState(null)
    const [signer, setSigner] = useState(null)
    const [network, setNetwork] = useState(null)
    const connectMetamask= async()=>{
        if(window.ethereum){
            if(isConnected===false){
                console.log("Ethereum Found")
                try{
                    const responce = await window.ethereum.request({method:"eth_requestAccounts"})
                    console.log(responce)
                    setIsConnected(true)
                    setAddress(responce[0])
                    const tempProvider = new ethers.providers.Web3Provider(window.ethereum)
                    setProvider(tempProvider)
                    const tempSigner = tempProvider.getSigner()
                    setSigner(tempSigner)
                    const net = await tempProvider.getNetwork()
                    console.log(net)
                    setNetwork(net)
                }
                catch(e){
                    console.log(e)
                    if(e.code===4001){
                        console.log("USER REJECTED THE REQUEST")
                        setIsConnected(false)
                    }
                }
            }
        }else{
            console.log("Ethereum Not Found")
        }

    }

    return [isConnected,address,connectMetamask,provider,signer,network]
}

