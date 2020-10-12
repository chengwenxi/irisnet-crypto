const Irisnet = require('../index');
const chai = require('chai');
const assert = chai.assert;

const common = require('./common');
//const url ="http://irisnet-lcd.dev.rainbow.one/tx/broadcast";
const url ="http://106.53.32.134:1317/txs";
const rpcUrl = 'http://106.53.32.134:26657';
const chainName ="iris";

describe('iris transaction', function () {

    let chain_id = "test";
    let from = "iaa14x8a7y88py9xkvkxzld3jxhgpjpm03whruzwzp";
    let account_number = 7;
    let fee = {
        amount:[
            {denom: "stake", amount: '60'}
        ],
        gasLimit:'200000'
    };
    let memo = "1";
    let privateKey = "1E120611404C4B1B98FC899A8026A6A9823C35985DA3C5ED3FF57C170C822F60";
    let pubKey = "EB5AE987210223A2504060763CBC62F642516A158A0B29B6A2EF9C512B9FE17F8FD972BA9B41";
    let chain = Irisnet.config.chain.iris;


    //测试热钱包相关交易
    describe('test warm wallet tx', function () {
        // it('test simulate transfer', function () {
        //     let tx = {
        //         chain_id: chain_id,
        //         from: from,
        //         account_number: account_number,
        //         sequence: 57,
        //         fees: fees,
        //         gas: gas,
        //         memo: memo,
        //         type: Irisnet.config.iris.tx.transfer.type,
        //         mode: Irisnet.config.iris.mode.try,
        //         msg: {
        //             to: "faa1s6v9qgu8ye7d884s8kpye64x66znndg8t6eztj",
        //             coins: [
        //                 {
        //                     denom: "iris-atto",
        //                     amount: 10000000000000000000
        //                 }
        //             ]
        //         }
        //     };

        //     simulate(tx);
        // });

        // it('test transfer', function () {
        //     let tx = {
        //         chain_id: chain_id,
        //         account_number: account_number,
        //         sequence: 4,
        //         fee: fee,
        //         memo: memo,
        //         publicKey:pubKey,
        //         msgs: [
        //             {
        //                 type:Irisnet.config.iris.tx.transfer.type,
        //                 value:{
        //                     from_address:from,
        //                     to_address:'iaa1gytgufwqkz9tmhjgljfxd3qcwpdzymj6022q3w',
        //                     amount:[
        //                         {
        //                             denom: "stake",
        //                             amount: 3
        //                         }
        //                     ]
        //                 }
        //             }
        //         ]
        //     };

        //     common.verifyTxRpc(rpcUrl, tx, privateKey, chainName, rpcTxVerify);
        // });

        // it('test delegate', function () {
        //     let tx = {
        //         chain_id: chain_id,
        //         account_number: account_number,
        //         sequence: 2,
        //         fee: fee,
        //         memo: memo,
        //         msgs: [
        //             {
        //                 type:Irisnet.config.iris.tx.delegate.type,
        //                 value:{
        //                     delegator_address:from,
        //                     validator_address: "iva1jawm6yadku5ura9lrtjstpe30kh6vl6uhhypuv",
        //                     amount: {
        //                         denom: "stake",
        //                         amount: 3
        //                     }
        //                 }
        //             }
        //         ]
        //     };
        //     common.verifyTxRpc(rpcUrl, tx, privateKey, chainName, rpcTxVerify);
        // });

        // it('test BeginUnbonding', function () {
        //     let tx = {
        //         chain_id: chain_id,
        //         account_number: account_number,
        //         sequence: 15,
        //         fee: fee,
        //         memo: memo,
        //         msgs:[
        //             {
        //                 type:Irisnet.config.iris.tx.undelegate.type,
        //                 value:{
        //                     delegator_address:from,
        //                     validator_address: "iva1jawm6yadku5ura9lrtjstpe30kh6vl6uhhypuv",
        //                     amount: {
        //                         denom: "stake",
        //                         amount: 3
        //                     }
        //                 }
        //             }
        //         ] 
        //     };
        //     common.verifyTxRpc(rpcUrl, tx, privateKey, chainName, rpcTxVerify);
        // });

        // it('test BeginRedelegate', function () {
        //     let tx = {
        //         chain_id: chain_id,
        //         account_number: account_number,
        //         sequence: 3,
        //         fee: fee,
        //         memo: memo,
        //         msgs: [
        //             {
        //                 type:Irisnet.config.iris.tx.redelegate.type,
        //                 value:{
        //                     delegator_address:from,
        //                     validator_src_address: "iva1jawm6yadku5ura9lrtjstpe30kh6vl6uhhypuv",
        //                     validator_dst_address: "iva1jawm6yadku5ura9lrtjstpe30kh6vl6uhhypuv",
        //                     amount: {
        //                         denom: "stake",
        //                         amount: 3
        //                     }
        //                 }
        //             }
        //         ]
        //     };
        //     common.verifyTxRpc(rpcUrl, tx, privateKey, chainName, rpcTxVerify);
        // });

        it('test addLiquidity', function (){
            let tx = {
                chain_id: chain_id,
                account_number: account_number,
                sequence: 5,
                fee: fee,
                memo: memo,
                // publicKey:pubKey,
                msgs: [
                    {
                        type:Irisnet.config.iris.tx.addLiquidity.type,
                        value:{
                            max_token:{
                                denom: "uiris",
                                amount: 2
                            },
                            exact_standard_amt:'100',
                            min_liquidity:'100',
                            deadline:new Date().getTime(),
                            sender:from
                        }
                    }
                ]
            };
            common.verifyTxRpc(rpcUrl, tx, privateKey, chainName, rpcTxVerify);
        });

        // it('test removeLiquidity', function () {
        //     let tx = {
        //         chain_id: chain_id,
        //         account_number: account_number,
        //         sequence: 2,
        //         fee: fee,
        //         memo: memo,
        //         msgs: [
        //             {
        //                 type:Irisnet.config.iris.tx.removeLiquidity.type,
        //                 value:{
        //                     withdraw_liquidity:{
        //                         denom: "uni:stake",
        //                         amount: 2
        //                     },
        //                     min_token:'100',
        //                     min_standard_amt:'100',
        //                     deadline:new Date().getTime(),
        //                     sender:from
        //                 }
        //             }
        //         ]
        //     };
        //     common.verifyTxRpc(rpcUrl, tx, privateKey, chainName, rpcTxVerify);
        // });

        // it('test swapOrder', function () {
        //     let tx = {
        //         chain_id: chain_id,
        //         account_number: account_number,
        //         sequence: 13,
        //         fee: fee,
        //         memo: memo,
        //         msgs: [
        //             {
        //                 type:Irisnet.config.iris.tx.swapOrder.type,
        //                 value:{
        //                     input : {
        //                         address:from,
        //                         coin:{
        //                             denom: "stake",
        //                             amount: "10"
        //                         },
        //                     },
        //                     output : {
        //                         address:from,
        //                         coin:{
        //                             denom: "uiris",
        //                             amount: "1"
        //                         },
        //                     },
        //                     deadline:new Date().getTime(),
        //                     isBuyOrder:true
        //                 }
        //             }
        //         ]
        //     };
        //     console.log('tttttttttttt:',JSON.stringify(tx));
        //     common.verifyTxRpc(rpcUrl, tx, privateKey, chainName, rpcTxVerify);
        // });

        // it('test MsgWithdrawDelegatorRewardsAll', function () {
        //     let tx = {
        //         chain_id: chain_id,
        //         from: from,
        //         account_number: account_number,
        //         sequence: 55,
        //         fees: fees,
        //         gas: gas,
        //         memo: memo,
        //         type: Irisnet.config.iris.tx.withdrawDelegationRewardsAll.type,
        //         //mode: Irisnet.config.iris.mode.try
        //     };

        //     common.verifyTx(url,tx,privateKey,chainName,verify);
        // });

        // it('test MsgWithdrawDelegatorReward', function () {
        //     let tx = {
        //         chain_id: chain_id,
        //         from: from,
        //         account_number: account_number,
        //         sequence: 42,
        //         fees: fees,
        //         gas: gas,
        //         memo: memo,
        //         type: Irisnet.config.iris.tx.withdrawDelegationReward.type,
        //         msg: {
        //             validator_addr: "fva1aake3umjllpd9es5d3qmry4egcne0f8ajd7vdp",
        //         }
        //     };

        //     common.verifyTx(url,tx,privateKey,chainName,verify);
        // });
    });

    //测试冷钱包相关交易
    // describe('test cold wallet tx ', function () {
    //     it('test transfer', function () {
    //         let tx = {
    //             chain_id: chain_id,
    //             from: from,
    //             account_number: account_number,
    //             sequence: 21,
    //             fees: fees,
    //             gas: gas,
    //             memo: memo,
    //             type: Irisnet.config.iris.tx.transfer.type,
    //             msg: {
    //                 to: "faa1s6v9qgu8ye7d884s8kpye64x66znndg8t6eztj",
    //                 coins: [
    //                     {
    //                         denom: "iris-atto",
    //                         amount: 10000000000000000000
    //                     }
    //                 ]
    //             }
    //         };

    //         extracted(tx);
    //     });


    //     it('test delegate', function () {
    //         let tx = {
    //             chain_id: chain_id,
    //             from: from,
    //             account_number: account_number,
    //             sequence: 55,
    //             fees: fees,
    //             gas: gas,
    //             memo: memo,
    //             type: Irisnet.config.iris.tx.delegate.type,
    //             msg: {
    //                 validator_addr: "fva1kca5vw7r2k72d5zy0demszmrhdz4dp8t4uat0c",
    //                 delegation: {
    //                     denom: "iris-atto",
    //                     amount: 10000000000000000000
    //                 }
    //             }
    //         };

    //         extracted(tx);
    //     });

    //     it('test BeginUnbonding', function () {
    //         let tx = {
    //             chain_id: chain_id,
    //             from: from,
    //             account_number: account_number,
    //             sequence: 45,
    //             fees: fees,
    //             gas: gas,
    //             memo: memo,
    //             type: Irisnet.config.iris.tx.undelegate.type,
    //             msg: {
    //                 validator_addr: "fva16h3uazd2wknrae7ql0dqpjw69s5kp44slme6hr",
    //                 shares_amount: "10000000000000000000"
    //             }
    //         };

    //         extracted(tx);
    //     });

    //     it('test BeginRedelegate', function () {
    //         let tx = {
    //             chain_id: chain_id,
    //             from: from,
    //             account_number: account_number,
    //             sequence: 20,
    //             fees: fees,
    //             gas: gas,
    //             memo: memo,
    //             type: Irisnet.config.iris.tx.redelegate.type,
    //             msg: {
    //                 validator_src_addr: "fva1cr6xfpp078nm7yfsh36850ftu20fl3c9duchrk",
    //                 validator_dst_addr: "fva1xde0yh9vmc8mnkdvdr5krllfe3gslw9d4qp2wd",
    //                 shares_amount: "10000000000000000000"
    //             }
    //         };

    //         extracted(tx);
    //     });

    //     it('test MsgWithdrawDelegatorRewardsAll', function () {
    //         let tx = {
    //             chain_id: chain_id,
    //             from: from,
    //             account_number: account_number,
    //             sequence: 46,
    //             fees: fees,
    //             gas: gas,
    //             memo: memo,
    //             type: Irisnet.config.iris.tx.withdrawDelegationRewardsAll.type,
    //         };

    //         extracted(tx);
    //     });

    //     it('test MsgWithdrawDelegatorReward', function () {
    //         let tx = {
    //             chain_id: chain_id,
    //             from: from,
    //             account_number: account_number,
    //             sequence: 26,
    //             fees: fees,
    //             gas: gas,
    //             memo: memo,
    //             type: Irisnet.config.iris.tx.withdrawDelegationReward.type,
    //             msg: {
    //                 validator_addr: "fva1xde0yh9vmc8mnkdvdr5krllfe3gslw9d4qp2wd",
    //             }
    //         };

    //         extracted(tx);
    //     });

    //     it('test MsgSwapOrder', function () {
    //         let tx = {
    //             chain_id: chain_id,
    //             from: from,
    //             account_number: account_number,
    //             sequence: 34,
    //             fees: fees,
    //             gas: gas,
    //             memo: memo,
    //             type: Irisnet.config.iris.tx.swapOrder.type,
    //             msg: {
    //                 input : {
    //                     address:from,
    //                     coin:{
    //                         denom: "iris-atto",
    //                         amount: "10000000000000000000000000000000"
    //                     },
    //                 },
    //                 output : {
    //                     address:from,
    //                     coin:{
    //                         denom: "btc-min",
    //                         amount: "1"
    //                     },
    //                 },
    //                 deadline:1565777966877,
    //                 isBuyOrder:true
    //             }
    //         };
    //         extracted(tx);
    //     });

    //     it('test MsgAddLiquidity', function () {
    //         let tx = {
    //             chain_id: chain_id,
    //             from: from,
    //             account_number: account_number,
    //             sequence: 29,
    //             fees: fees,
    //             gas: gas,
    //             memo: memo,
    //             type: Irisnet.config.iris.tx.addLiquidity.type,
    //             msg: {
    //                 max_token : {
    //                     denom: "btc-min",
    //                     amount: "10"
    //                 },
    //                 exact_iris_amt: "10000000000000000000000",
    //                 min_liquidity: "100000000000000000",
    //                 deadline:new Date().getTime()
    //             }
    //         };
    //         extracted(tx);
    //     });

    //     it('test MsgRemoveLiquidity', function () {
    //         let tx = {
    //             chain_id: chain_id,
    //             from: from,
    //             account_number: account_number,
    //             sequence: 30,
    //             fees: fees,
    //             gas: gas,
    //             memo: memo,
    //             type: Irisnet.config.iris.tx.removeLiquidity.type,
    //             msg: {
    //                 withdraw_liquidity : {
    //                     denom: "u-btc-min",
    //                     amount: "10000000000000000000000"
    //                 },
    //                 min_iris_amt: "10000000000000000",
    //                 min_token: "1",
    //                 deadline:new Date().getTime()
    //             }
    //         };
    //         extracted(tx);
    //     });
    // });

    //冷钱包调用
    function extracted(tx, chain = 'iris') {
        let builder = Irisnet.getBuilder(chain,'testnet');
        //①先用联网的钱包构造一笔交易
        let stdTx = builder.buildTx(tx);
        //②把步骤①的结构序列化为字符串，装入二维码
        let signStr = JSON.stringify(stdTx.GetSignBytes());
        //③用未联网的钱包(存有账户秘钥)扫描步骤②的二维码，拿到待签名的字符串，调用signTx签名
        let signature = builder.sign(signStr, privateKey);
        //④
        let signatureStr = JSON.stringify(signature);//二维码字符串
        stdTx.SetSignature(signatureStr);
        //console.log("======待提交交易======");
        //④步骤③的结果调用GetData，得到交易字符串，回传给联网的钱包，并发送该内容给irishub-server
        console.log(JSON.stringify(stdTx.GetData()));

        //以下步骤为异常处理：在请求irishub-server超时的时候，服务器可能没有任何返回结果，这笔交易状态为止，所以需要客户端计算出
        //本次交易的hash，校准该笔交易的状态。调用步骤③结构的Hash，可以得到交易hash以及本次交易内容的base64编码（以后考虑使用该编码内容替换
        // GetPostData,解耦crypto和irishub交易结构的依赖）

        let resp = common.sendBySync("POST",url,stdTx.GetData());
        let result = stdTx.Hash();
        console.log(`hash=${result.hash}`)
        assert.notExists(resp.code,`tx commit failed,${resp.raw_log}`);
        assert.equal(result.hash,resp.hash)

    }

    //simulate
    function simulate(tx) {
        let builder = Irisnet.getBuilder(chain);
        let stdTx = builder.buildAndSignTx(tx);
        stdTx.SetPubKey(pubKey);
        console.log("======stdTx======");
        console.log(JSON.stringify(stdTx.GetData()));
        // console.log("======待提交交易======");
        let result = stdTx.Hash();
        console.log("hash", result.hash);
    }
});

function rpcTxVerify(data) {
    console.log(data);
}

function verify(act,exp,data) {
    assert.notExists(act.check_tx.code,`tx commit failed,${act.check_tx.log}`);
    assert.equal(act.hash,exp.hash)
}