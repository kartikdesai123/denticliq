<?php

namespace App\Http\Resources;

use App\Models\Category;
use Illuminate\Http\Resources\Json\ResourceCollection;
use App\Utility\CategoryUtility;
use App\Models\ProductCategory;

class AllCategoryCollection extends ResourceCollection
{
    public function toArray($request)
    {
        return [
            'data' => $this->collection->map(function($data) {
                $allCategory = ProductCategory::pluck('category_id')->toArray();
                $final = array_values(array_unique($allCategory));
                $childrens = Category::whereIn('id',$final)->where('level','=','1')->whereIn('id', CategoryUtility::children_ids($data->id))->get();
                return [
                    'name' => $data->getTranslation('name'),
                    'banner' => api_asset($data->banner),
                    'icon' => api_asset($data->icon),
                    'slug' => $data->slug,
                    'children' => new CategoryCollection($childrens),
                ];
            })
        ];
    }

    public function with($request)
    {
        return [
            'success' => true,
            'status' => 200
        ];
    }
}
