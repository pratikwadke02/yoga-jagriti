import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { theme } from "../../theme";
import { images } from "../../constants";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

const TermsAndConditions = () => {
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
          width:'100%',
          maxWidth:'1500px',
          m:'auto',
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
            TERMS & CONDITIONS
          </Typography>
          <div
            className="darkbar"
            style={{ margin: "auto", marginTop: "20px" }}
          ></div>
        </Box>
        <Box>
          <Typography
            variant="h6"
            sx={{ mt: 2, textAlign: "justify", textJustify: "inter-word" }}
          >
            Thank you for accessing/shopping at yogajagriti.com. This site is
            owned by Jagriti Yoga & Naturopathy Sansthan (hereinafter referred
            to as “yogajagriti.com”). By accessing, shopping on this site, you
            indicate your unconditional acceptance of these terms & conditions.
            We reserve this right, in our sole discretion, to update or revise
            these terms & conditions. Continued use of the site following the
            posting of any changes to the ‘terms & conditions’, constitutes your
            acceptance of those changes. At “yogajagriti.com”, we try our best
            to create a space where you can explore and shop for all your
            favorite things in a safe and secure environment. All products and
            information displayed on “yogajagriti.com” constitutes an
            "invitation to offer". “yogajagriti.com” reserves the right to
            accept or reject your offer. Your order for purchase, constitutes
            your "offer" which shall be subject to the terms and conditions as
            listed below.
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
              sx={{ ml: 1, textAlign: "justify", textJustify: "inter-word",fontWeight: theme.typography.fontWeightMedium, color:theme.palette.primary.main }}
            >
              Eligibility to use our site
            </Typography>
          </Box>
          <Typography
            variant="h6"
            sx={{ mt: 2, textAlign: "justify", textJustify: "inter-word" }}
          >
            Use of the Site is available only to persons who can legally enter
            into contracts under applicable laws. Persons who are "incompetent
            to contract", within the meaning of the Indian Contract Act, 1872
            including un-discharged insolvents etc. are not eligible to use the
            Site. “yogajagriti.com” reserves the right to terminate your
            access to the Site if it discovers that you are under the age of 18
            years or suffers from any other disability, as recognized under
            Indian Contract Act, 1872.
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
              sx={{ ml: 1, textAlign: "justify", textJustify: "inter-word", fontWeight: theme.typography.fontWeightMedium, color:theme.palette.primary.main }}
            >
              Membership
            </Typography>
          </Box>
          <Typography
            variant="h6"
            sx={{ mt: 2, textAlign: "justify", textJustify: "inter-word" }}
          >
            Although it's not essential to have an account to shop with
            “yogajagriti.com”, you can shop as a guest. As a member, you
            agree to provide true, accurate, current, and complete information
            about yourself as prompted by the site's registration form.
            Registration where prohibited under any law shall be void.
            “yogajagriti.com” reserves the right to revoke or terminate your
            registration for any reason at any time, without notice.
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
              sx={{ ml: 1, textAlign: "justify", textJustify: "inter-word", fontWeight: theme.typography.fontWeightMedium, color:theme.palette.primary.main }}
            >
              Electronic Communications
            </Typography>
          </Box>
          <Typography
            variant="h6"
            sx={{ mt: 2, textAlign: "justify", textJustify: "inter-word" }}
          >
            When you use the site or send emails or other data, information or
            communicate to us, you agree and understand that you are
            communicating with us electronically and give your consent to
            receive communications electronically from us periodically, when
            required.
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
              sx={{ ml: 1, textAlign: "justify", textJustify: "inter-word",fontWeight: theme.typography.fontWeightMedium, color:theme.palette.primary.main  }}
            >
              Reviews, Feedback, Submissions
            </Typography>
          </Box>

          <Typography
            variant="h6"
            sx={{ mt: 2, textAlign: "justify", textJustify: "inter-word", }}
          >
            All reviews, comments, feedback, postcards, suggestions, ideas, and
            other submissions disclosed, submitted or offered to “---Website
            URL----” directly or otherwise disclosed, submitted or offered in
            connection with your use of this Site (collectively referred to
            "Comments") will remain “yogajagriti.com” property. Such
            disclosure, submission or offer of any comments shall constitute an
            assignment to “yogajagriti.com” of all worldwide rights, titles
            and interests in all copyrights and other intellectual properties in
            the comments,thus, it exclusively owns all such rights, titles and
            interests and shall not be limited in any way in its use, commercial
            or otherwise. “yogajagriti.com” will be entitled to use,
            reproduce, disclose, modify, adapt, create derivative works from,
            publish, display and distribute any comments you submit for any
            purpose whatsoever, without restriction and without compensating you
            in any way. “yogajagriti.com” is and shall be under no obligation
            (1) to maintain any Comments in confidence; or (2) to pay you any
            compensation for any Comments; or (3) to respond to any Comments.
            You agree that any comments submitted by you to the Site will not
            violate this policy or any right of any third party, including
            copyright, trademark, privacy or other personal or proprietary
            right(s), and will not cause injury to any person or entity. You
            further agree that no comments submitted by you to the site will be
            libelous or otherwise unlawful, threatening, abusive or obscene
            material, or contain software viruses, political campaigning,
            commercial solicitation, chain letters, mass mailings or any form of
            "spam".
          </Typography>
          <Typography
            variant="h6"
            sx={{ mt: 2, textAlign: "justify", textJustify: "inter-word" }}
          >
            “yogajagriti.com” does not regularly review posted comments, but
            does reserve the right (but not the obligation) to monitor and edit
            or remove any comment submitted to the Site. You grant “yogajagriti.com” the right to use the name that you submit in connection
            with any of the posted comments. You agree not to use a false email
            address, impersonate any person or entity, or otherwise mislead as
            to the origin of any Comments you submit. You are and shall remain
            solely responsible for the content of any comments you make and you
            agree to indemnify “yogajagriti.com” and its affiliates for all
            claims resulting from any Comments you submit, we take no
            responsibility and assume no liability for any comments submitted by
            you or any third party.
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
              sx={{ ml: 1, textAlign: "justify", textJustify: "inter-word", fontWeight: theme.typography.fontWeightMedium, color:theme.palette.primary.main }}
            >
              Accuracy of Content/ Information of Products on the Web Site
            </Typography>
          </Box>
          <Typography
            variant="h6"
            sx={{ mt: 2, textAlign: "justify", textJustify: "inter-word" }}
          >
            While “yogajagriti.com” strives to provide accurate product and
            pricing information, typographical errors may occur. In the event
            that a product is listed at an incorrect price or with incorrect
            information due to an error in pricing or product information,
            “yogajagriti.com” shall have the right, on our sole discretion, to
            modify the price of the products, or information of the products or
            to refuse or cancel any orders placed for that product, unless the
            product has already been dispatched. In the event.
          </Typography>
        </Box>
        </Box>
      </Container>
    </>
  );
};

export default TermsAndConditions;
