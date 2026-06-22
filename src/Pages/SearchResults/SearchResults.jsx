import { useParams } from "react-router"
import "./SearchResults.css"
import { UseProductContext } from "../../ProductContext";
import TopHeader from "../../components/TopHeader/TopHeader";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import ProductCardSmall from "../../components/ProductCardSmall/ProductCardSmall";
import { calculate_review_avg } from "../Home/Home";

export default function SearchResults() {
    var params = useParams();
    const {products, finishedLoading} = UseProductContext();
    const [ results, setResults ] = useState([]);

    const normalize = (string) => string.trim().toUpperCase();

    console.log("Params:")
    console.log(JSON.stringify(params))

    useEffect(() => {
        if (finishedLoading) {
            setResults(products.filter(p => normalize(p.name).includes(normalize(params.query))));

            console.log("Resultados:")
            console.log(results)
        }
    }, [finishedLoading, params])

    return (
        <div className="mainPageContainer flex column">
            <TopHeader />
            <div className="pageContentContainer flex column">
            { finishedLoading && 
                <div>
                    {results != undefined && results?.length > 0
                    ?
                        results.map((result, idx) => (
                            <ProductCardSmall   
                                key={idx}
                                productId={result.id}
                                productImage={result.images[0].path}
                                productName={result.name}
                                productPrice={result.price}
                                productRating={calculate_review_avg(result) ?? 0}
                                numOfRatings={result.reviews.length}
                            />
                        ))
                    :
                    <p>No results</p>}
                </div>
            }
            </div>
            <Footer />
        </div>
        
    )
}