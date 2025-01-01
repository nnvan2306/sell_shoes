import styles from './Policies.module.scss'
import classNames from 'classnames/bind';
import PolicyItem from './PolicyItem';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
const cx = classNames.bind(styles);

function Policies() {
    const policies = 
    [
        {id: 1, question: "Tại sao tôi nên tham gia CoolClub?", answer: "CoolClub là chương trình Hội viên dành cho tất cả khách hàng Coolmate, mang đến nhiều quyền lợi cho người tham gia. Hội viên CoolClub sẽ được: Tích lũy chi tiêu để thăng hạng; Hưởng các quyền lợi theo hạng Hội viên: nhận quà tặng định kỳ, ưu đãi độc quyền; Hoàn tiền CoolCash cho mỗi đơn hàng; Đổi thưởng và rất nhiều quyền lợi khác sẽ được Coolmate cập nhật thường xuyên."}, 
        {id: 2, question: "Đăng ký làm Hội viên CoolClub có mất phí không? Cách đăng ký như thế nào?", answer: "Bạn có thể đăng ký CoolClub hoàn toàn miễn phí bằng cách tạo Tài khoản tại website Coolmate.me. Khi đăng ký thành công, bạn đã được nhận các quyền lợi của hạng Thành viên mới, đồng thời nhận ngay voucher mua sắm 15% (tối đa 50.000 VND) để bắt đầu mua sắm."}, 
        {id: 3, question: "Chương trình CoolClub cũ ngừng áp dụng khi nào? CoolClub mới có nâng cấp gì khác?", answer: "Chương trình CoolClub cũ ngừng áp dụng vào ngày 25/09/2023 để nâng cấp. Ở chương  trình CoolClub phiên bản mới, bạn sẽ có trải nghiệm mua sắm thú vị hơn với nhiều đặc quyền theo hạng Hội viên, tích luỹ chi tiêu để thăng hạng, hoàn tiền CoolCash cho mỗi đơn hàng, đổi thưởng, nhận quà tặng định kỳ và vô vàn ưu đãi, chương trình, quyền lợi độc quyền khác sẽ được Coolmate cập nhật thêm trong tương lai."}, 
        {id: 4, question: "CoolCash có thời hạn không? Nếu có, thời hạn là bao lâu?", answer: "CoolCash được tích luỹ sau mỗi đơn hàng có giá trị trong 4 Quý và sẽ được cập nhật hạn dùng vào ngày đầu tiên của mỗi Quý, diễn ra 4 lần mỗi năm vào các ngày 01/01, 01/04, 01/07 và 01/10."}, 
        {id: 5, question: "Tôi có thể kết hợp ưu đãi theo Hạng Hội viên và ưu đãi khác không?", answer: "Khi mua sắm trên website Coolmate, bên cạnh các ưu đãi hiện có, bạn sẽ được tự động áp dụng ưu đãi theo hạng Hội viên tương ứng. Tuy nhiên, việc áp dụng một số quyền lợi CoolClub có thể thay đổi tuỳ vào chính sách và quy định của từng chương trình ưu đãi."}, 
        {id: 6, question: "Hạng Hội viên khi nào sẽ được cập nhật? Bao lâu sẽ được cập nhật lại?", answer: "Hội viên sẽ thăng hạng ngay khi đạt mức chi tiêu của hạng tiếp theo. Hạng Hội viên sẽ được cập nhật vào ngày đầu tiên của mỗi Quý, diễn ra 4 lần mỗi năm vào các ngày 01/01, 01/04, 01/07 và 01/10."}, 
        {id: 7, question: "Làm sao để tích luỹ CoolCash?", answer: "Sau khi đăng ký Hội viên CoolClub, bạn sẽ nhận được hoàn tiền CoolCash từ mỗi giao dịch mua hàngtrên website Coolmate theo hạng Hội viên tương ứng và dựa trên chi tiêu mỗi đơn hàng. Mỗi 1 đơn vị CoolCash có giá trị hỗ trợ thanh toán tương đương 1 VND (1 CoolCash = 1 VND). "}, 
        {id: 8, question: "Tôi có thể dùng CoolCash để giảm giá trực tiếp không?", answer: "Có, bạn có thể sử dụng CoolCash trừ trực tiếp vào giá trị đơn hàng khi mua sắm. Tuy nhiên, bạn cần lưu ý:  Nếu số CoolCash bạn có ít hơn 50% giá trị đơn hàng: Tất cả CoolCash sẽ bị trừ ngay khi sử dụng.Nếu số CoolCash bạn có nhiều hơn 50% giá trị đơn hàng: Số CoolCash bị trừ tối đa bằng 50% giá trị đơn hàng ngay khi sử dụng, số còn lại sẽ được bảo lưu cho lần mua hàng tiếp theo."}, 
        {id: 9, question: "Đổi/trả hàng có ảnh hưởng đến CoolCash và hạng Hội viên không?", answer: "Có, CoolCash và hạng Hội viên chỉ được tính trên giá trị của đơn hàng thành công. Việc đổi/trả hàng có thể ảnh hưởng đến giá trị cuối cùng khi hoàn tất đơn hàng."}, 
        {id: 10, question: "Tôi mua hàng trên các sàn thương mại điện tử có được tích lũy chi tiêu CoolClub không?", answer: "Trong thời điểm hiện tại, chương trình CoolClub chỉ dành cho các khách hàng mua hàng tại Website Coolmate, chưa áp dụng với các khách hàng mua hàng tại các sàn thương mại điện tử."}, 

    ]
    return ( 
        <>
            <div className={cx('container')}>
            <Link to={'/user-profile'} className={cx('account-page__icon')}>
                    <BiArrowBack /> 
                </Link>
                <h1 className={cx('account-page__title')}>FAQ - Câu hỏi thường gặp</h1>
                <div>
                    {
                        policies.map((item, index) => {
                            return <>
                                <PolicyItem key={index} props={item}/>
                            </>
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Policies;