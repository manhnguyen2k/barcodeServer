class BeckmanController {
    static async Genator(req, res, next){
        try {
            const uncheckcodes = req.body.uncheckcode
            if (!Array.isArray(uncheckcodes)) {
                throw new Error('uncheckcode must be an array');
            }
            //const checkedcode = GET_CHECK_BIT_Beckman(uncheckcode.toString())
            const checkedcodes = uncheckcodes.map(uncheckcode => {
                const checkedcode = GET_CHECK_BIT_Beckman(uncheckcode.toString());
                if (checkedcode === -1) {
                    throw new Error(`Invalid code for uncheckcode: ${uncheckcode}`);
                }
                return checkedcode;
            });
            return res.status(200).json({
                code: 200,
                checkedcodes: checkedcodes
            });
           
        } catch (error) {
            return res.status(400).json({
                code: 400,
                message: error.message || 'An error occurred while processing your request'
            });
        }
    }


    
}
function GET_CHECK_BIT_Beckman(  num_string_GS1_128)
        {
            // num = "0011331335208123121";
        let num = num_string_GS1_128;
      
         let MAX_N =20-1;//19

            if (num.length >= MAX_N)
            {

                let N =[] ;


                let count_add = 0;
                for (let i = 0; i < num.length; i++)
                {
                  
                   
                       let so= parseInt( num[i]);
                        if( !isNaN(so)){
                           N[count_add] = so;

                             count_add++;
                        if (count_add >= MAX_N)
                        {
                            break;
                        }
                        }
                      
                    
                }




                if (count_add == MAX_N)
                {
                    let OK__ = true;
                    for (let i = 0; i < MAX_N; i++)
                    {
                        if (N[i] < 0 || N[i] > 9)
                        {
                            OK__ = false; break;
                        }

                    }
                    if (OK__)
                    {






   // // Chuyển chuỗi nhập vào thành mảng các chữ số
   // const digits = barcode.split('').map(Number);
    
    // Biến tổng
    let sum = 0;
    
    // Trọng số bắt đầu từ 3 và 1 xen kẽ từ phải qua trái
    for (let i = N.length - 1; i >= 0; i--) {
        const weight = (i % 2 === 0) ? 3 : 1;
        sum += N[i] * weight;
    }
    
    // Tính toán check digit
    const checkDigit = (10 - (sum % 10)) % 10;
    
    return checkDigit;

                    



                    }

                }



            }
            return -1;
        }

module.exports = BeckmanController