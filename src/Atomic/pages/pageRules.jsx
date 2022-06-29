import * as React from "react";
import { styled } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import CssBaseline from "@material-ui/core/CssBaseline";

import Typography from "@material-ui/core/Typography";
import  Tabs  from "@material-ui/core/Tabs";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Rules() {
  return (
    <Box
      sx={{
        margin: "39px",
        display: "flex",
        padding: "10rem",
        paddingTop: "0",
        paddingBottom: "0",
      }}
    >
      <CssBaseline />

      <Main
        style={{
          margin: "0 auto",
          padding: "0 1rem",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <DrawerHeader />
        <Typography style={{ textAlign: "center", marginBottom: "100px" }}>
          {" "}
          <img
            style={{ width: "100%", height: "438px" ,marginTop:'-58px'}}
            src="http://hhvn.com.vn/wp-content/uploads/2020/11/Cover-Web.jpg"
            alt=""
          />{" "}
        </Typography>
        <Typography paragraph>
          <b>
            {" "}
            “Hoa hậu Việt Nam” là cuộc thi hoa hậu dành riêng cho phái nữ, được
            tổ chức hai năm một lần trên quy mô toàn quốc. Cuộc thi “Hoa hậu
            Việt Nam 2020” được Bộ VH-TT-DL cấp giấy phép số 120 /GP-BVHTTDL
            ngày 09/12.2019.
          </b>
        </Typography>
        <Typography style={{ textAlign: "start" }}>
          <Typography paragraph>
            <b>1. Đối tượng tham gia cuộc thi </b>
            <br></br>
            <br></br>
            Nữ công dân Việt Nam tuổi từ 8 đến 27 (tính heo năm sinh ghi trong
            giấy khai sinh)
          </Typography>
          <Typography>
            <b> 2. Điều kiện dự thi</b>
            <br></br>
            <br></br>
            <i>
              {" "}
              Nữ công dân Việt Nam tuổi từ 18 đến 27 có đủ các điều kiện sau, có
              quyền đăng ký tham dự cuộc thi:
            </i>
            <br></br>
            <br></br>
            -Có đạo đức tốt;
            <br></br>
            <br></br>
            -Có vẻ đẹp tự nhiên;
            <br></br>
            <br></br>
            -Không có tiền án, tiền sự, không trong thời gian bị truy cứu trách
            nhiệm hình sự;
            <br></br>
            <br></br>
            -Chưa lập gia đình (được hiểu là: Chưa tổ chức đám cưới, chưa đăng
            ký kết hôn lần nào và chưa sống chung với ai như vợ chồng);
            <br></br>
            <br></br>
            -Chưa sinh con;
            <br></br>
            <br></br>
            -Trình độ văn hóa: Tốt nghiệp Trung học phổ thông trở lên (tính đến
            thời điểm Vòng Chung kết chính thức bắt đầu);
            <br></br>
            <br></br>
            -Chiều cao 1m63 trở lên, chưa từng qua giải phẫu thẩm mỹ, chưa từng
            qua chuyển đổi giới tính.
            <br></br>
            <br></br>
            <i>
              Thí sinh đã đạt danh hiệu Hoa Hậu, Á Hậu, Hoa Khôi, Á Khôi, Người
              Đẹp (Nhất, Nhì, Ba) tại các cuộc thi sắc đẹp cấp tỉnh, thành,
              ngành diễn ra trong năm 2019 hoặc 2020 sẽ được đặc cách vào vòng
              thi Chung khảo khu vực phía Bắc hoặc phía Nam, nếu như thí sinh đó
              phù hợp các quy định ở điều kiện dự thi và hoàn thiện hồ sơ theo
              đúng quy định tại Thể lệ này.{" "}
            </i>
            <br></br>
            <br></br>
          </Typography>
          <Typography>
            <b>3.Địa điểm thời gian thi </b>
            <br></br>
            <ul>
              <li>
                {" "}
                Vòng Sơ Khảo Phía Nam: ngày 08/8/2020, tại TP. Hồ Chí Minh
              </li>
              <br></br>
              <li>
                Vòng Chung Khảo Phía Nam: Từ ngày 13/8/2020-22/8/2020, tại thành
                phố Hồ Chí Minh
              </li>
              <br></br>
              <li>Vòng Sơ khảo Phía Bắc: Ngày 30/8/2020 tại Hà Nội.</li>
              <br></br>
              <li>
                Vòng Chung Khảo Phía Bắc: Từ ngày 03/9/2020-12/9/2020, tại Hà
                Nội.
              </li>
              <br></br>
              <li>
                Vòng Chung kết toàn quốc từ 24/9 đến 23/10/2020 tại Quảng Ninh
                và Thành phố Hồ Chí Minh.
              </li>
            </ul>
            Đêm Chung kết 20g thứ 6 ngày 23/10/2020 tại thành phố Hồ Chí Minh
          </Typography>
          <br></br>
          <Typography>
            <b> 4.Nội dung thi</b>
            <br></br>
            <br></br>
            -Thi trang phục áo dài Việt Nam.
            <br></br>
            <br></br>
            -Thi trang phục áo tắm.
            <br></br>
            <br></br>
            -Thi trang phục dạ hội.
            <br></br>
            <br></br>
            -Thi ứng xử (áp dụng cho các thí sinh lọt vào Top 5).
            <br></br>
            <br></br>
            Ngoài ra, BTC còn tổ chức các cuộc thi Người đẹp Nhân Ái, Người đẹp
            Biển, Người đẹp Tài năng, Người đẹp Truyền thông, Người đẹp Thời
            trang, Người đẹp Du lịch , Người đẹp Thể thao, Người có Gương mặt
            khả ái, Người đẹp Áo dài, Người có Làn da đẹp nhất và sát hạch thông
            qua các hoạt động đồng hành, dã ngoại, các hoạt động xã hội khác.
          </Typography>
          <br></br>
          <Typography>
            <b>5.Giải thưởng và danh hiệu</b>
            <br></br>
            <br></br>
            -Hoa hậu Việt Nam 2020: Giải thưởng chính thức gồm vương miện Hoa
            hậu Việt Nam và 350.000.000 đồng. (Ba trăm năm mươi triệu đồng)
            <br></br>
            <br></br>
            -Á hậu 1 cuộc thi Hoa hậu Việt Nam 2020: Giải thưởng chính thức
            250.000.000 đồng. (Hai trăm năm mươi triệu đồng)
            <br></br>
            <br></br>
            -Á hậu 2 cuộc thi Hoa hậu Việt Nam 2020: Giải thưởng chính thức
            200.000.000 đồng. (Hai trăm triệu đồng) Cuộc thi cũng chọn ra những
            thí sinh xuất sắc để trao các danh hiệu: “Người đẹp Truyền thông”,
            “Người đẹp Tài năng”, “Người đẹp Biển”, “Người có Gương mặt khả ái”,
            “Người đẹp Áo dài”, “Người có Làn da đẹp nhất”, “Người đẹp Thời
            trang”, “Người đẹp Thể thao”, “Người đẹp Du lịch”…
            <br></br>
            <br></br>
            Mỗi giải thưởng trị giá 50.000.000 đồng. (Năm mươi triệu đồng).
            <br></br>
            <br></br>
            Riêng giải thưởng “Người đẹp Nhân ái” và "Người đẹp Biển", ngoài
            phần thưởng trị giá 50.000.000 đồng (Năm mươi triệu đồng), thí sinh
            đạt giải “Người đẹp Nhân ái” được đặc cách vào TOP 5 thi ứng xử, thí
            sinh đạt giải “Người đẹp Biển" đặc cách vào TOP 10.
          </Typography>
          <br></br>
          <Typography>
            <b> 6.Địa điểm đăng ký dự thi</b>
            <br></br>
            <br></br>
            Thí sinh nộp đơn đăng ký dự thi (theo mẫu chung của Ban tổ chức)
            trực tiếp hoặc qua đường bưu điện tại:
            <br></br>
            <br></br>
            -Tiểu ban thí sinh cuộc thi Hoa hậu Việt Nam 2020 tại Tòa soạn báo
            Tiền Phong, số 15 Hồ Xuân Hương, quận Hai Bà Trưng, TP Hà Nội.
            <br></br>
            <br></br>
            -Tiểu ban thí sinh cuộc thi Hoa hậu Việt Nam 2020 tại Ban đại diện
            báo Tiền Phong tại Tp Hồ Chí Minh-Số 384 Nam Kỳ Khởi Nghĩa, Q3, Tp
            Hồ Chí Minh.
            <br></br>
            <br></br>
            -Ban đại diện Báo Tiền Phong tại Tây Nguyên-Số 26 Trần Nhật Duật, TP
            Buôn Ma Thuột, Đắc Lắc. ĐT: 02500 3950029.
            <br></br>
            <br></br>
            -Ban đại diện Báo Tiền Phong tại Miền Trung-Số 19 Ngô Gia Tự, TP Đà
            Nẵng. ĐT: 02511 3828039.
            <br></br>
            <br></br>
            -Ban đại diện Báo Tiền Phong tại Nghệ An-Số 21, Hồ Xuân Hương, TP
            Vinh, Nghệ An. ĐT: 02388602345.
            <br></br>
            <br></br>
            -Văn phòng Cty Sen Vàng: 6D Trường Sa, Phường 17, Quận Bình Thạnh,
            TP. HCM
            <br></br>
            <br></br>
            -Mẫu đơn nhận tại các địa điểm trên hoặc tải và in từ báo điện tử
            Tiền Phong www.tienphong.vn, hoặc trang web của BTC:
            www.hoahau.tienphong.vn, hhvn.com.vn
          </Typography>
          <br></br>
          <Typography>
            <b> 7.Thời gian đăng ký dự thi</b>
            <br></br>
            <br></br>
            -Thời gian đăng ký đối với khu vực phía Nam đến hết ngày 07/8/2020,
            đối với khu vực phía Bắc đến hết ngày 29/8/2020.
          </Typography>
          <br></br>
          <Typography>
            <b>8.Hồ sơ đăng ký dự thi </b>
          </Typography>
          <br></br>
          a. Đơn đăng ký dự thi (theo mẫu của BTC)
          <br></br>
          <br></br>
          b. Sơ yếu lý lịch (được chính quyền địa phương hoặc cơ quan, tổ chức
          nơi thí sinh đang học tập và công tác xác nhận trước ngày nộp đăng ký
          dự thi không quá 15 ngày).
          <br></br>
          <br></br>
          c. Bằng tốt nghiệp trung học phổ thông hoặc giấy xác nhận tốt nghiệp
          trung học phổ thông (giấy xác nhận chỉ có giá trị trong 1 tháng kể từ
          ngày cấp, sau đó phải nộp Bằng tốt nghiệp)-của nhà trường nơi thí sinh
          đã tốt nghiệp phổ thông trung học (bản sao có công chứng).
          <br></br>
          <br></br>
          d. 03 tấm ảnh mầu cỡ 13x18 cm (chụp chân dung, mặc áo tắm và toàn
          thân).
          <br></br>
          <br></br>
          e. Các giấy tờ khác theo quy định của thể lệ cuộc thi: Chứng minh nhân
          dân, Hộ khẩu (bản sao có công chứng).
          <br></br>
          <br></br>
          f. Chứng nhận danh hiệu Hoa hậu, Á hậu, Hoa khôi, Á khôi tại các cuộc
          thi sắc đẹp cấp tỉnh, thành, ngành diễn ra trong năm 2019 hoặc 2020 mà
          thí sinh đã đoạt giải...(bản sao có công chứng.)
          <br></br>
          <br></br>
          <b>Lưu ý:</b> Hồ sơ nếu gửi qua đường bưu điện, phong bì phải dán tem
          và đề rõ <b> “Hồ sơ đăng ký dự thi Hoa hậu Việt Nam 2020”.</b>
          <br></br>
          Chi tiết về cuộc thi sẽ được cập nhật liên tục trên trang:
          https://www.tienphong.vn/ và fanpage:
          <i style={{ color: "red" }}>
            https://www.facebook.com/MissVietnam.TP/{" "}
          </i>
          <img
            src="https://photo-cms-tpo.zadn.vn/w645/Uploaded/2022/jaetgs/2020_05_27/mau_don_dang_ky_du_thi_hoa_hau_viet_nam_2021_tsus.jpg"
            alt=""
          />
          <br></br>
          <br></br>
          <Typography style={{ display: "flex", justifyContent: "center" }}>
            <b>Ban tổ chức</b>
          </Typography>
        </Typography>
      </Main>
    </Box>
  );
}
