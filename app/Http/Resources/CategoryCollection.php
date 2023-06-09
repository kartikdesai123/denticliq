<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;
use App\Utility\CategoryUtility;
use App\Models\Category;
use App\Models\ProductCategory;

class CategoryCollection extends ResourceCollection
{
    public function toArray($request)
    {
        return [
            'data' => $this->collection->map(function($data) {
                $allCategory = ProductCategory::pluck('category_id')->toArray();
                $final = array_values(array_unique($allCategory));
                $childrenssub = Category::whereIn('id',$final)->whereIn('id', CategoryUtility::children_ids($data->id))->get();
                return [
                    'id' => $data->id,
                    'name' => $data->getTranslation('name'),
                    'banner' => api_asset($data->banner),
                    'icon' => api_asset($data->icon),
                    'slug' => $data->slug,
                    'childrensub' => new SubCategoryCollection($childrenssub),
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
