import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { theme } from "../../theme";
import { images } from "../../constants";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

const RefundPolicy = () => {
  return (
    <>
      <Container
        sx={{
          pb: 8,
          maxWidth: { xs: "100%" },
          pt: 5,
          backgroundColor: theme.palette.background.light,
          backgroundImage: `url(${images.pattern_three})`,
          height: "100%",
          minHeight: "95vh",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1500px",
            m: "auto",
          }}
        >
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <Typography
              variant="h2"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: theme.typography.fontWeightBold,
              }}
            >
              REFUND POLICY
            </Typography>
            <div
              className="darkbar"
              style={{ margin: "auto", marginTop: "20px" }}
            ></div>
          </Box>
          <Box>
            <Box
              sx={{
                mt: 2,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CheckCircleOutlineOutlinedIcon color="primary" />
              <Typography
                variant="h6"
                sx={{
                  ml: 1,
                  textAlign: "justify",
                  textJustify: "inter-word",
                  fontWeight: theme.typography.fontWeightMedium,
                  color: theme.palette.primary.main,
                }}
              >
                Return
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{ mt: 2, textAlign: "justify", textJustify: "inter-word" }}
            >
              Product must be returned to us within ------- days from the date
              it has been delivered to the customer. Product must be returned
              with all tags attached in its original condition along with all
              packing material, courier receipt, invoice & other papers.
            </Typography>
            <Box
              sx={{
                mt: 2,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CheckCircleOutlineOutlinedIcon color="primary" />
              <Typography
                variant="h6"
                sx={{
                  ml: 1,
                  textAlign: "justify",
                  textJustify: "inter-word",
                  fontWeight: theme.typography.fontWeightMedium,
                  color: theme.palette.primary.main,
                }}
              >
                Refund
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{ mt: 2, textAlign: "justify", textJustify: "inter-word" }}
            >
              Once the Product is received to the company successfully,
              Jagriti Yoga & Naturopathy Sansthan will instantly initiate the refund to your
              source account or chosen method of refund within --- working days.
            </Typography>
            <Box
              sx={{
                mt: 2,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CheckCircleOutlineOutlinedIcon color="primary" />
              <Typography
                variant="h6"
                sx={{
                  ml: 1,
                  textAlign: "justify",
                  textJustify: "inter-word",
                  fontWeight: theme.typography.fontWeightMedium,
                  color: theme.palette.primary.main,
                }}
              >
                Refund & Cancellation for Service Provider Company
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{ mt: 2, textAlign: "justify", textJustify: "inter-word" }}
            >
              Due to service providers in nature “NO REFUND”,“NO CANCELLATION”
              will be entertained once the Payment has been made.
            </Typography>
            <Box
              sx={{
                mt: 2,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CheckCircleOutlineOutlinedIcon color="primary" />
              <Typography
                variant="h6"
                sx={{
                  ml: 1,
                  textAlign: "justify",
                  textJustify: "inter-word",
                  fontWeight: theme.typography.fontWeightMedium,
                  color: theme.palette.primary.main,
                }}
              >
                Cencellation Policy
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{ mt: 2, textAlign: "justify", textJustify: "inter-word" }}
            >
              Please note an order can only be canceled within 24 hours of
              placing the order. Once the order is processed after 24 hours, no
              cancellation request will be entertained.However return is
              possible for all orders/products.
            </Typography>
            <Typography
              variant="h6"
              sx={{ mt: 2, textAlign: "justify", textJustify: "inter-word" }}
            >
              OR
            </Typography>
            <Typography
              variant="h6"
              sx={{ mt: 2, textAlign: "justify", textJustify: "inter-word" }}
            >
              Customers can CANCEL order only before the Order has been
              shipped/Dispatched. After the Product/s have been shipped, The
              Customer CANNOT Cancel the Orders. However return is possible for
              all orders/products.
            </Typography>

            <Box
              sx={{
                mt: 2,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CheckCircleOutlineOutlinedIcon color="primary" />
              <Typography
                variant="h6"
                sx={{
                  ml: 1,
                  textAlign: "justify",
                  textJustify: "inter-word",
                  fontWeight: theme.typography.fontWeightMedium,
                  color: theme.palette.primary.main,
                }}
              >
                Shipping & Delivery Policies
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{ mt: 2, textAlign: "justify", textJustify: "inter-word" }}
            >
              Jagriti Yoga & Naturopathy Sansthan ships its products to almost all parts of
              India. Orders placed will be shipped within 24* hrs. We ship on
              all days except Sunday and National Holidays. For all areas
              serviced by reputed couriers, the delivery time would be within 3
              to 4 business days of shipping (business days exclude Sundays and
              other holidays). For other areas the products will be shipped
              through --------------- and may take 1-2 weeks depending on
              location. At times there might be unexpected delays in the
              delivery of your order due to unavoidable and undetermined
              logistics challenges beyond our control for which --Company
              Name--is not liable and would request its users to cooperate as
              --Company Name-- continuously tries to nought such instances.
              Also, Jagriti Yoga & Naturopathy Sansthan reserves the right to cancel your order
              at its sole discretion in cases where it takes longer than usual
              delivery time or the shipment is physically untraceable and refund
              the amount paid for cancelled product(s) to your source account.
            </Typography>
            <Box
              sx={{
                mt: 2,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CheckCircleOutlineOutlinedIcon color="primary" />
              <Typography
                variant="h6"
                sx={{
                  ml: 1,
                  textAlign: "justify",
                  textJustify: "inter-word",
                  fontWeight: theme.typography.fontWeightMedium,
                  color: theme.palette.primary.main,
                }}
              >
                Contact Us
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{ mt: 2, textAlign: "justify", textJustify: "inter-word" }}
            >
              Jagriti Yoga & Naturopathy Sansthan
            </Typography>
            <Typography
              variant="h6"
              sx={{ mt: 2, textAlign: "justify", textJustify: "inter-word" }}
            >
              --Company Address--
            </Typography>
            <Typography
              variant="h6"
              sx={{ mt: 2, textAlign: "justify", textJustify: "inter-word" }}
            >
              --Phone No--
            </Typography>
            <Typography
              variant="h6"
              sx={{ mt: 2, textAlign: "justify", textJustify: "inter-word" }}
            >
              --Email Id--
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default RefundPolicy;
