import { useLocation, useParams } from "react-router"
import { use, useEffect, useState } from "react";

import { calculate_review_avg } from "../Home/Home";
import { UseProductContext } from "../../ProductContext";
import TopHeader from "../../components/TopHeader/TopHeader";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./SearchResults.css"

export default function SearchResults({ liveSearch=false }) {
    var params = useParams();
    var location = useLocation();
    const {products, finishedLoading} = UseProductContext();
    const [ results, setResults ] = useState([]);
    const [ searchQuery, setSearchQuery ] = useState("");

    const normalize = (string) => string.trim().toUpperCase();

    function loadLiveSearchResults() {
        if (searchQuery.trim().length > 0) {
            setResults(products.filter(p => normalize(p.name).includes(normalize(searchQuery))));
            return;
        }

        setResults([]); 
    }

    useEffect(() => {
        liveSearch = liveSearch === true || ['/search', '/search/'].includes(location.pathname);
    }, [])

    // Load search Results
    useEffect(() => {
        setResults([]); // Clear old results
        if (finishedLoading && !liveSearch) {
            setResults(products.filter(p => normalize(p.name).includes(normalize(params.query))));
        }
    }, [finishedLoading, params])

    // Handle search Results (live search)
    useEffect(() => {
        if (finishedLoading && liveSearch) {
            loadLiveSearchResults(searchQuery);
        }
    }, [searchQuery])
    
    return (
        <div className="mainPageContainer flex column">
            <TopHeader />
            <div className="pageContentContainer vCenter flex column">
                { finishedLoading && 
                    <>
                        {/* Mobile layout search */}
                        {liveSearch &&
                            <div className="liveSearchInputContainer flex column vCenter">
                                <input placeholder="Search..." className="liveSearchInput" type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                                
                                {searchQuery.trim().length > 0 &&
                                    <p className="centeredText semibold searchResultsHeader" style={{"marginTop":"10px"}}>
                                        {(results?.length === 0) 
                                        ? `No results for "${searchQuery}"`
                                        : `Results for "${searchQuery}":`}
                                    </p>    
                                }
                            </div>   
                        }

                        <div>  
                            {params.query && 
                                <p className="centeredText semibold searchResultsHeader">
                                    {(results?.length === 0) 
                                    ? `No results for "${params.query}"`
                                    : `Results for "${params.query}":`}
                                </p>
                            }

                            <div className="resultsContainer">
                                {results.map((result, idx) => (
                                        <ProductCard   
                                            key={idx}
                                            productId={result.id}
                                            productImage={result.images[0].path}
                                            productName={result.name}
                                            productPrice={result.price}
                                            productRating={calculate_review_avg(result) ?? 0}
                                            numOfRatings={result.reviews.length}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    
                    </>
                    
                }
            </div>
            <Footer />
        </div>
        
    )
}