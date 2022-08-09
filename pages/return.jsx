import MainLayout from "../src/components/layouts/main";
const ReturnPage = () => {
    return (
        <MainLayout
            seo={{
                title: 'Retun & Exchange'
            }}
        >
            <div className="flex justify-center" >
                <div className="w-10/12 md:w-8/12 space-y-4">
                    <h1 className="text-center text-4xl font-medium mb-12 mt-8" >
                        Return & Exchange Policy
                    </h1>
                    <p>
                        Please email <a href="mailto:info@lilmayoshop.com">info@lilmayoshop.com</a> to get more info on how to exchange or to
                        start a return.
                    </p>
                    <p>
                        Exchanges will be accepted within 16 days of your purchase with exception of final
                        sale items. <strong>All tags must be intact, must be in original packaging (must have
                        white product label and packaging must be intact), and products must be
                        unworn.</strong>
                    </p>
                    <p>
                        In case of return, you will receive your refund after 28 business days.
                    </p>
                    <p>
                        <strong>Please note:</strong> <i>all sale items purchased through discount code or promotion are
                            FINAL SALE, not eligible for altering your order, returns, and/or exchanges.</i>
                    </p>
                </div>
            </div>
        </MainLayout>
    )
};

export default ReturnPage
